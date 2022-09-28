package com.example.demo.service;

import org.springframework.mail.MailException;

import com.example.demo.entity.Email;

public interface IEmailService {

//	 String sendSimpleMail(Email details);
//	 
//	 String sendMailWithAttachment(Email details);

	 public void sendSimpleEmail(String email, String body, String subject) throws MailException, InterruptedException;

}
