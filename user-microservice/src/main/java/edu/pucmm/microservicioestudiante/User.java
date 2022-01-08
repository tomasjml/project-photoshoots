package edu.pucmm.microservicioestudiante;

import lombok.*;

import javax.persistence.*;
import java.io.Serializable;
import java.util.List;


@Entity
@Builder
@AllArgsConstructor
@NoArgsConstructor
public class User implements Serializable {

    @Id
    @NonNull
    @Getter
    @Setter
    @Column(name = "email", updatable = false, nullable = false)
    private String email;

    @NonNull
    @Getter
    @Setter
    private String password;

    @NonNull
    @Getter
    @Setter
    private String name;

    @NonNull
    @Getter
    @Setter
    @ElementCollection(targetClass = String.class,fetch = FetchType.EAGER)
    List<String> roles;

    @NonNull
    @Getter
    @Setter
    private boolean isAdministrator;
}
