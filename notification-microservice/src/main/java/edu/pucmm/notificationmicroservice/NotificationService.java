package edu.pucmm.notificationmicroservice;

import org.simplejavamail.api.email.Email;
import org.simplejavamail.api.mailer.Mailer;
import org.simplejavamail.api.mailer.config.TransportStrategy;
import org.simplejavamail.email.EmailBuilder;
import org.simplejavamail.mailer.MailerBuilder;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.stereotype.Service;

import java.text.SimpleDateFormat;
import java.util.Date;
import java.util.List;

import static j2html.TagCreator.*;

@Service
public class NotificationService {

    @Autowired
    private NotificationRepository notificationRepo;

    @Value("${api_key}")
    private String API_KEY;

    public List<Notification> getAllByDestination(String destination){
        return notificationRepo.findAllByMailTo(destination);
    }

    public Notification saveNotification(Notification newNotification){
        return notificationRepo.save(newNotification);
    }

    public void sendNotification(Notification notification){

        //Configurando el servidor.
        Mailer mailer = MailerBuilder
                .withSMTPServer("smtp.sendgrid.net", 587, "apikey", API_KEY)
                .withTransportStrategy(TransportStrategy.SMTP_TLS)
                .withSessionTimeout(10 * 1000)
                .clearEmailValidator() // turns off email validation
                .withDebugLogging(true)
                .buildMailer();

        String html = body(
                h1("PhotoShoot"),
                h2(notification.getMessage())
        ).render();

        //Configurando el Correo para ser enviado.
        //https://generator.email/qkamal@alpicley.gq
        Email email = EmailBuilder.startingBlank()
                .from("noreply@rdom.me")
                .to("Destination", notification.getMailTo())
                .withReplyTo("Soporte", "soporte@rdom.me")
                .withSubject(notification.getSubject() + " - " + new SimpleDateFormat("dd/MM/yyyy hh:mm:ss").format(new Date()))
                //.withHTMLText(html)
                .withPlainText(notification.getMessage())
                .withReturnReceiptTo()
                .withBounceTo("bounce@rdom.me")
                .buildEmail();

        //Enviando el mensaje:
        mailer.sendMail(email);
    }


}
