package edu.pucmm.microservicioestudiante;

import lombok.*;

import javax.persistence.*;
import java.io.Serializable;


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
    private boolean isAdministrator;
}
