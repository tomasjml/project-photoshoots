package edu.pucmm.notificationmicroservice;

import com.netflix.hystrix.contrib.javanica.annotation.HystrixCommand;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.cloud.client.circuitbreaker.EnableCircuitBreaker;
import org.springframework.cloud.client.discovery.EnableDiscoveryClient;
import org.springframework.context.annotation.Bean;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.client.RestTemplate;

import javax.servlet.http.HttpServletRequest;
import java.sql.SQLException;
import java.util.Random;

@EnableDiscoveryClient
@EnableCircuitBreaker
@SpringBootApplication
public class NotificationMicroserviceApplication {

    public static void main(String[] args) {
        SpringApplication.run(NotificationMicroserviceApplication.class, args);
    }

    /**
     * Para subir H2 modo servidor en Spring Boot.
     * @return
     * @throws SQLException
     */
    /*@Bean(initMethod = "start", destroyMethod = "stop")
    public Server inMemoryH2DatabaseaServer() throws SQLException {
        System.out.println("Iniciando Base de datos.");
        return Server.createTcpServer("-tcp", "-tcpAllowOthers", "-tcpPort", "9092", "-ifNotExists", "-tcpDaemon");
    }*/
}



@RestController
@RequestMapping("/test")
class AppController{

    private static final Logger LOGGER = LoggerFactory.getLogger(AppController.class);

    @RequestMapping("/")
    public String app(HttpServletRequest request){
        LOGGER.info("Consultado la barra");
        return "Micro Servicio notificacion por el puerto:"+request.getLocalPort();
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


