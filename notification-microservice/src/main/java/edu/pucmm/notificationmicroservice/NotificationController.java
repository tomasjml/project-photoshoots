package edu.pucmm.notificationmicroservice;

import lombok.RequiredArgsConstructor;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.client.HttpServerErrorException.GatewayTimeout;

@RestController
@RequiredArgsConstructor
@RequestMapping("/")
public class NotificationController {

    private final NotificationService notificationService;

    @CrossOrigin
    @PostMapping(value="/send", consumes = "application/json", produces = "application/json")
    public Notification sendNotification(@RequestBody Notification notification) throws GatewayTimeout {

        System.out.println(notification.getMailTo());
        System.out.println(notification.getMessage());
        System.out.println(notification.getSubject());

        notificationService.sendNotification(notification);
        return notificationService.saveNotification(notification);
    }

    public void timeoutFallback(){
        System.out.println("GatewayTimeout");
    }
}
