package com.example.demo;

import java.util.Properties;

import org.modelmapper.ModelMapper;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.context.annotation.Bean;
//import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;
//import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.mail.javamail.JavaMailSender;
import org.springframework.mail.javamail.JavaMailSenderImpl;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;
import org.springframework.security.crypto.password.PasswordEncoder;

@SpringBootApplication
public class ProjectNewApplication {
	@Value("${file.upload.location}")
	private String folderName;
	
	
	
	public static void main(String[] args) {
		SpringApplication.run(ProjectNewApplication.class, args);
	}
	
	//configure ModelMapper as a spring bean
		@Bean //equivalent to <bean> tag in xml file
		public ModelMapper mapper()
		{
			System.out.println("in mapper");
			return new ModelMapper();
		}
		
		@Bean
		public PasswordEncoder encoder()
		{
			return new BCryptPasswordEncoder();
		}
		
//		@Override
//		public void run(String... args) throws Exception {
//			System.out.println("in run "+folderName);
//			//create images folder if it doesn't exist
//			File dir=new File(folderName);
//			if(!dir.exists()) {
//				System.out.println("Created folder/s "+dir.mkdirs());
//			}
//			else 
//				System.out.println("folder alrdy exists");		
//		}
		
		 

}
