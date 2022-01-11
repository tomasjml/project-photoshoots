package edu.pucmm.microservicioestudiante;

import com.google.gson.Gson;
import com.google.gson.JsonArray;
import com.google.gson.JsonObject;
import io.jsonwebtoken.Jwts;
import io.jsonwebtoken.SignatureAlgorithm;
import lombok.RequiredArgsConstructor;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.Date;
import java.util.List;
import java.util.Map;
import java.util.Optional;

@RestController
@RequiredArgsConstructor
@RequestMapping("/")
public class UserController {
    private final UserService userService;
    private static final Gson gson = new Gson();

    @Value("${token_jwt}")
    private String secretKey;

    // Get All
    @GetMapping("/all")
    public List<User> getAllUsers(){
        return userService.getAllUsers();
    }

    // Get One
    @GetMapping("/{email}")
    public User getUser(@PathVariable("email") String email){
        return userService.getUser(email);
    }

    // Add User
    @PostMapping("/add")
    public User postUser(@RequestBody User newUser){

        userService.sendNotification(newUser.getEmail(),
                "Welcome " + newUser.getName(),
                "New User Created: \n\n" +
                        "Name: " + newUser.getName() + "\n" +
                        "Email: " + newUser.getEmail());

        return userService.createUser(newUser);
    }

    // Delete User
    @DeleteMapping("/delete/{email}")
    public ResponseEntity<String> deleteUser(@PathVariable("email") String email){
        return userService.deleteUser(email);
    }


    @RequestMapping(value = "/login", method = RequestMethod.POST)
    public ResponseEntity<String> authenticate(@RequestBody Map<String, String> payload){
        String token = "";
        System.out.println("Payload value: " + payload);
        Optional<User> user = userService.confirmUser(payload.get("email"), payload.get("password"));
        System.out.println("User: " + user);
        if(!user.isPresent()){
            return new ResponseEntity<>(HttpStatus.UNAUTHORIZED);
        }

        token = generateToken(user.get());

        // JSONObject with the token and the payload username
        JsonObject jsonObject = new JsonObject();
        jsonObject.addProperty("token", token);
        jsonObject.addProperty("name", user.get().getName());
        jsonObject.addProperty("email", user.get().getEmail());
        jsonObject.addProperty("roles", new Gson().toJson(user.get().getRoles()));
        return new ResponseEntity<>(gson.toJson(jsonObject), HttpStatus.OK);
    }

    private String generateToken(User user) {

        String token = Jwts
                .builder()
                .setId("softtekJWT")
                .setSubject(user.getName())
                .claim("roles",user.getRoles())
                .setIssuedAt(new Date(System.currentTimeMillis()))
                .setExpiration(new Date(System.currentTimeMillis() + 600000))
                .signWith(SignatureAlgorithm.HS512,
                        secretKey.getBytes()).compact();

        return token;
    }


}
