package com.example.demo.controller;

import javax.validation.Valid;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.security.authentication.AuthenticationManager;
import org.springframework.security.authentication.BadCredentialsException;
import org.springframework.security.authentication.UsernamePasswordAuthenticationToken;
import org.springframework.security.core.Authentication;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.example.demo.dto.AuthRequest;
import com.example.demo.dto.AuthResp;
import com.example.demo.jwt_utils.JwtUtils;

@RestController
@RequestMapping("/api/auth")
@CrossOrigin("http://localhost:3000")

public class SignInSignUpController {
//dep : JWT utils : for generating JWT
	@Autowired
	private JwtUtils utils;
	// dep : Auth mgr
	@Autowired
	private AuthenticationManager manager;

	// add a method to authenticate user . Incase of success --send back token , o.w
	// send back err mesg
	@PostMapping("/signin")
	public ResponseEntity<?> validateUserCreateToken(@RequestBody @Valid AuthRequest request) {
		// store incoming user details(not yet validated) into Authentication object
		// Authentication i/f ---> imple by UserNamePasswordAuthToken
		System.out.println( "in login controller");
		UsernamePasswordAuthenticationToken authToken = new UsernamePasswordAuthenticationToken(request.getEmail(),
				request.getPassword());
		System.out.println( "auth token " + authToken);
		try {
			// authenticate the credentials
			Authentication authenticatedDetails = manager.authenticate(authToken);
			// => auth succcess
			return ResponseEntity.ok(new AuthResp("Auth successful!", utils.generateJwtToken(authenticatedDetails)));
		} catch (BadCredentialsException e) { // lab work : replace this by a method in global exc handler
			// send back err resp code
			System.out.println("err "+e);
			return ResponseEntity.status(HttpStatus.UNAUTHORIZED).body(null);
		}

	}
}
