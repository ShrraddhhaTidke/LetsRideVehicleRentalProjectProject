package com.example.demo.dto;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@AllArgsConstructor
@NoArgsConstructor
public class MessageDTO {

	
	private String recipient;
    private String msgBody;
    private String subject;
    private String attachment;
    
    
	public MessageDTO() {
		super();
	}


	public MessageDTO(String recipient, String msgBody, String subject, String attachment) {
		super();
		this.recipient = recipient;
		this.msgBody = msgBody;
		this.subject = subject;
		this.attachment = attachment;
	}
    
    
}
