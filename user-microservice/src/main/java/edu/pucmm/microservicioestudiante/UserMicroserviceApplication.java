package edu.pucmm.microservicioestudiante;

import com.netflix.hystrix.contrib.javanica.annotation.HystrixCommand;
import com.netflix.hystrix.contrib.javanica.annotation.HystrixException;
import com.netflix.hystrix.contrib.javanica.annotation.HystrixProperty;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.slf4j.Marker;
import org.slf4j.helpers.BasicMarkerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.CommandLineRunner;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.cloud.client.circuitbreaker.EnableCircuitBreaker;
import org.springframework.cloud.client.discovery.EnableDiscoveryClient;
import org.springframework.cloud.netflix.hystrix.EnableHystrix;
import org.springframework.context.annotation.Bean;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.http.MediaType;
import org.springframework.stereotype.Repository;
import org.springframework.web.bind.annotation.*;

import javax.persistence.Entity;
import javax.persistence.Id;
import javax.servlet.http.HttpServletRequest;
import java.io.Serializable;
import java.util.Arrays;
import java.util.List;
import java.util.Random;
import java.sql.SQLException;

@EnableDiscoveryClient
@EnableCircuitBreaker
@SpringBootApplication
public class UserMicroserviceApplication {
    public static void main(String[] args) {
        SpringApplication.run(UserMicroserviceApplication.class, args);
    }


    @Bean
    public CommandLineRunner loadInitialData(UserService userService) {
        System.out.println("Initializing Data - ");

        return args -> {
            User newUser = new User(
                    "admin@mocky.com",
                    "admin",
                    "Admin",
                    Arrays.asList("ROLE_ADMIN"),
                    true

            );
            userService.createUser(newUser);

            User newUser2 = new User(
                    "jtml.mass@gmail.com",
                    "jtmlmass",
                    "Tomas",
                    Arrays.asList("ROLE_ADMIN"),
                    true
            );
            userService.createUser(newUser2);

            User newUser3 = new User(
                    "test@gmail.com",
                    "test",
                    "Test",
                    Arrays.asList("ROLE_ADMIN"),
                    true
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



