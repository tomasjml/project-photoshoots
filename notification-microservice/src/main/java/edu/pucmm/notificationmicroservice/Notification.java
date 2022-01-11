package edu.pucmm.notificationmicroservice;

import lombok.*;
import org.hibernate.annotations.GenericGenerator;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.Id;
import java.io.Serializable;

@Entity
@Builder
@AllArgsConstructor
@NoArgsConstructor
public class Notification implements Serializable {

    @Id
    @NonNull @Getter @Setter
    @GeneratedValue(generator = "UUID")
    @GenericGenerator(
            name = "UUID",
            strategy = "org.hibernate.id.UUIDGenerator"
    )
    @Column(name = "notification_id", updatable = false, nullable = false)
    private String id;

    @NonNull @Getter @Setter
    private String mailTo;

    @NonNull @Getter @Setter
    private String message;
}
