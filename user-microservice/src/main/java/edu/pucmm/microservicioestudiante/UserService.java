package edu.pucmm.microservicioestudiante;

import com.google.gson.JsonObject;
import org.h2.util.json.JSONObject;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.http.*;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;
import org.springframework.stereotype.Service;
import org.springframework.web.client.RestTemplate;
import sun.reflect.generics.tree.ReturnType;

import java.util.*;

@Service
public class UserService {

    @Autowired
    private UserRepo repo;
    @Autowired
    private RestTemplate restTemplate;

    @Value("${strength}")
    private int passwordStrength;



    public List<User> getAllUsers(){return repo.findAll();}

    public User createUser(User user){
        BCryptPasswordEncoder bCryptPasswordEncoder = new BCryptPasswordEncoder(this.passwordStrength);

        user.setPassword(bCryptPasswordEncoder.encode(user.getPassword()));

        return repo.save(user);
    }

    public void sendNotification(String email, String subject, String message) {
        HttpHeaders headers = new HttpHeaders();
        headers.setContentType(MediaType.APPLICATION_JSON);
        headers.setAccept(Collections.singletonList(MediaType.APPLICATION_JSON));

        JsonObject jsonObject = new JsonObject();



        //Map<String, String> map = new HashMap<>();
        jsonObject.addProperty("mailTo",email);
        jsonObject.addProperty("subject",subject);
        jsonObject.addProperty("message", message);

        HttpEntity<String> entity = new HttpEntity<>(jsonObject.toString(), headers);

        restTemplate.postForEntity("http://localhost:8080/notification/send/",entity, String.class);

    }

    public User getUser(String email){
        Optional<User> user = Optional.ofNullable(repo.findByEmail(email));
        return user.orElse(null);
    }

    public Optional<User> confirmUser(String email, String password){
        Optional<User> loggedUser = Optional.of(repo.findByEmail(email));
        if(loggedUser.isPresent()){
            BCryptPasswordEncoder bCryptPasswordEncoder = new BCryptPasswordEncoder(this.passwordStrength);
            if(bCryptPasswordEncoder.matches(password, loggedUser.get().getPassword())){
                return loggedUser;
            }
        }
        return Optional.empty();
    }

    public ResponseEntity<String> deleteUser(String email) {
        Optional<User> user = Optional.ofNullable(repo.findByEmail(email));

        if(user.isPresent()){
            repo.delete(user.get());
            String message = "User " + user.get().getEmail() + " deleted";
            return ResponseEntity.ok().body(message);
        }
        return ResponseEntity.status(HttpStatus.NOT_FOUND).body("Mock Not Found");
    }
}
