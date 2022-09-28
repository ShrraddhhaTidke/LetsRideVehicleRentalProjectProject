package com.example.demo.service;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.mail.MailException;
import org.springframework.mail.SimpleMailMessage;
import org.springframework.mail.javamail.JavaMailSender;
import org.springframework.scheduling.annotation.Async;
import org.springframework.stereotype.Service;

@Service
public class EmailServiceImpl implements IEmailService {
	
private JavaMailSender mailSender;
	
	@Autowired
	public EmailServiceImpl(JavaMailSender javaMailSender) {
	super();
	this.mailSender = mailSender;
} 
	
    @Async
    @Override
    public void sendSimpleEmail(String toEmail, String body, String subject)
            throws MailException, InterruptedException {

//        System.out.println("Sleeping now.. ");
//        Thread.sleep(10000);

        SimpleMailMessage message = new SimpleMailMessage();
            message.setFrom("letsrideg97@gmail.com");
            message.setTo(toEmail); 
            message.setText(body);
            message.setSubject(subject); 
            mailSender.send(message);
            System.out.println("Mail send successfully! ");

    }

}
