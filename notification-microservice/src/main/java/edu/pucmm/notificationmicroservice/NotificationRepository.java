package edu.pucmm.notificationmicroservice;

import org.springframework.data.jpa.repository.JpaRepository;

import java.util.List;

public interface NotificationRepository extends JpaRepository<Notification, String> {
    List<Notification> findAllByMailTo(String mailTo);
}
