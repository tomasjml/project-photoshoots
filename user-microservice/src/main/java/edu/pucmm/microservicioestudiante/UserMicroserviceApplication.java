package edu.pucmm.microservicioestudiante;

import com.netflix.hystrix.contrib.javanica.annotation.HystrixCommand;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.boot.CommandLineRunner;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.cloud.client.circuitbreaker.EnableCircuitBreaker;
import org.springframework.cloud.client.discovery.EnableDiscoveryClient;
import org.springframework.context.annotation.Bean;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.client.RestTemplate;

import javax.servlet.http.HttpServletRequest;
import java.util.Arrays;
import java.util.Random;

@EnableDiscoveryClient
@EnableCircuitBreaker
@SpringBootApplication
public class UserMicroserviceApplication {
    public static void main(String[] args) {
        SpringApplication.run(UserMicroserviceApplication.class, args);
    }

    @Bean
    public BCryptPasswordEncoder bCryptPasswordEncoder() {
        return new BCryptPasswordEncoder();
    }

    @Bean
    public RestTemplate getRestTemplate() {
        return new RestTemplate();
    }

    @Bean
    public CommandLineRunner loadInitialData(UserService userService) {
        System.out.println("Initializing Data - ");

        return args -> {
            User newUser = new User(
                    "admin@gmail.com",
                    "admin",
                    "Admin",
                    Arrays.asList("ROLE_ADMIN"),
                    true

            );
            userService.createUser(newUser);

            User newUser2 = new User(
                    "empleado@gmail.com",
                    "empleado",
                    "Empleado",
                    Arrays.asList("ROLE_EMPLEADO"),
                    true
            );
            userService.createUser(newUser2);

            User newUser3 = new User(
                    "user@gmail.com",
                    "user",
                    "User",
                    Arrays.asList("ROLE_USER"),
                    false
            );
            userService.createUser(newUser3);

            System.out.println("Done initializing Data - ");
        };
    }
}





@RestController
@RequestMapping("/test")
class AppController{

    private static final Logger LOGGER = LoggerFactory.getLogger(AppController.class);

    @RequestMapping("/")
    public String app(HttpServletRequest request){
        LOGGER.info("Consultado la barra");
        return "Micro Servicio usuario por el puerto:"+request.getLocalPort();
    }

    /**
     * Simulando una parada del metodo por tiempo...
     * @return
     * @throws InterruptedException
     */
    @HystrixCommand(fallbackMethod = "salidaCircuitoAbierto" )
    @RequestMapping("/simular-parada")
    public String simularParada()  {
        LOGGER.info("Prueba simulación de parada.");
        Random random = new Random();
        int valorGenerado = random.nextInt(3000);
        LOGGER.info("El valor generado: "+valorGenerado);
        if(valorGenerado > 1000){
            throw new RuntimeException("Error provocado...");
        }
        return "Mostrando información";
    }

    public String salidaCircuitoAbierto(){
        LOGGER.info("Circuito Abierto...");
        return "Con la ejecución del metodo.... Abriendo el circuito...";
    }

}



