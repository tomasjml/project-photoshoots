package edu.pucmm.notificationmicroservice;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class NotificationService {

    @Autowired
    private NotificationRepository notificationRepo;

    public List<Notification> getAllByDestination(String destination){
        return notificationRepo.findAllByMailTo(destination);
    }

    public Notification saveNotification(Notification newNotification){
        return notificationRepo.save(newNotification);
    }

    public void sendNotification(Notification notification){

    }


}
