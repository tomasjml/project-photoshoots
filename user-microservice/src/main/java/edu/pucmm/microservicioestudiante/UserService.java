package edu.pucmm.microservicioestudiante;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@Service
public class UserService {

    @Autowired
    private UserRepo repo;

    @Value("${strength}")
    private int passwordStrength;

    public List<User> getAllUsers(){return repo.findAll();}

    public void createUser(User user){
        BCryptPasswordEncoder bCryptPasswordEncoder = new BCryptPasswordEncoder(this.passwordStrength);

        user.setPassword(bCryptPasswordEncoder.encode(user.getPassword()));
        repo.save(user);
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
}
