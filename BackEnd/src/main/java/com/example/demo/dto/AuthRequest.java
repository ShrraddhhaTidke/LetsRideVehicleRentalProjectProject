package com.example.demo.dto;

import javax.validation.constraints.NotBlank;
import javax.validation.constraints.Pattern;


public class AuthRequest {
	@NotBlank(message = "Email can't be blank or null")
	private String email;
	@NotBlank(message = "password can't be blank or null")
//	@Pattern(regexp="((?=.*\\d)(?=.*[a-z])(?=.*[#@$*]).{5-20})")
	private String password;
	public String getEmail() {
		return email;
	}
	public void setEmail(String email) {
		this.email = email;
	}
	public String getPassword() {
		return password;
	}
	public void setPassword(String password) {
		this.password = password;
	}
	
	@Override
	public String toString() {
		return "AuthRequest [email=" + email + ", password=" + password + "]";
	}
	
	
}
