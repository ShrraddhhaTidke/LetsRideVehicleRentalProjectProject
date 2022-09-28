//package com.example.demo.controller;
//
//import org.springframework.beans.factory.annotation.Autowired;
//import org.springframework.web.bind.annotation.PostMapping;
//import org.springframework.web.bind.annotation.RequestBody;
//import org.springframework.web.bind.annotation.RestController;
//
//import com.example.demo.entity.Email;
//import com.example.demo.service.IEmailService;
//
//@RestController("/sendMail")
//public class EmailController {
//	 @Autowired 
//	 private IEmailService emailService;
//	 
//	    // Sending a simple Email
//	    @PostMapping
//	    public String
//	    sendMail(@RequestBody Email details)
//	    {
//	        String status
//	            = emailService.sendSimpleMail(details);
//	 
//	        return status;
//	    }
//	 
//	    // Sending email with attachment
//	    @PostMapping("/sendMailWithAttachment")
//	    public String sendMailWithAttachment(
//	        @RequestBody Email details)
//	    {
//	        String status
//	            = emailService.sendMailWithAttachment(details);
//	 
//	        return status;
//	    }
//}
