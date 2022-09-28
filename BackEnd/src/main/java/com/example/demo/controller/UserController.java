package com.example.demo.controller;

import javax.servlet.http.HttpSession;
import javax.validation.Valid;

import org.hibernate.validator.constraints.Range;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.mail.MailException;
import org.springframework.ui.Model;
import org.springframework.validation.annotation.Validated;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.ResponseBody;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.servlet.mvc.support.RedirectAttributes;

import com.example.demo.dto.ResponseDTO;
import com.example.demo.dto.UserDTO;
import com.example.demo.entity.User;
import com.example.demo.entity.Vehicle;
import com.example.demo.service.IEmailService;
import com.example.demo.service.IUserService;

@RestController
@RequestMapping("/api/user")
@CrossOrigin(origins = "http://localhost:3000")
@Validated
public class UserController {
	@Autowired
	private IUserService uService;
	
	@Autowired
	private IEmailService emailSenderService;
	
	
public UserController() {
		System.out.println("in ctor of"+getClass());
	}
	
	@GetMapping("/{userId}")

	public UserDTO getUserDetails(@PathVariable Long userId) {	
		System.out.println("in get User " + userId);
		UserDTO user = uService.getUserDetails(userId);
		return user;
	}
	

	@PostMapping("/signin") 
	public ResponseEntity<?> processLoginForm(@RequestBody User user, Model map,
			HttpSession session, RedirectAttributes flashMap) {
			System.out.println("entered processloginform"+user.getEmail()+ " "+user.getPassword());
		try {
			User u = uService.authenticateUser(user.getEmail(), user.getPassword());
			
	
			System.out.println(u);
			return ResponseEntity.ok(u);	
			
		} catch (RuntimeException e) {
			
			
			return ResponseEntity.badRequest().body("Invalid Login");
		
		}
	}
	
	@PostMapping
	public ResponseEntity<UserDTO> saveUserDetail(@RequestBody @Valid UserDTO user){
		System.out.println("In save User"+user);

		return new ResponseEntity<>(uService.saveUserDetail(user), HttpStatus.CREATED);
	}
	
//	@PutMapping("/{userId}")
//	public String resetPassword(@PathVariable Long userId) {
//		System.out.println("in reset password " + userId);
//		return uService.updatePassword(userId);
//	}
	
	@DeleteMapping("/{userId}")
	public String deleteUseerDetails(@PathVariable Long userId) {
		System.out.println("in del User " + userId);
		return uService.deleteUserDetails(userId);
	}
	
	
	@PostMapping("/register")
	public ResponseEntity<?> registerUserDetail(@RequestBody UserDTO user) throws MailException, InterruptedException{
		System.out.println("In save User"+user);
//		uService.registerUserDetail(user)
		 
		return ResponseEntity.ok().body(uService.registerUserDetail(user));
	}
	
	@PostMapping("/forgot")
	public ResponseDTO<?> forgotPassword(@RequestBody UserDTO user ) {
		System.out.println("Inside Forgot Password");
		System.out.println(user.getEmail());
		try {
		User user1 = uService.findUserPassword(user.getEmail());
		if(user1.getEmail().equalsIgnoreCase(user.getEmail()))
		return new ResponseDTO(HttpStatus.OK,"Succesfully Logged in",user1);
		else
			return new ResponseDTO(HttpStatus.BAD_REQUEST,"No User Found",null);
		}catch (Exception e) {
			return new ResponseDTO(HttpStatus.BAD_REQUEST,"Some error occured try again",null);
		}
		
			
	}
		
			

	
//	@PostMapping("/register")
//    public ResponseEntity<?> registerUser(@RequestBody User     user ) {
//
//        try {
//            return ResponseEntity.ok().body(userService.registerUser(user));
//        } catch (Exception e) {
//
//            throw new UserHandlingException(e.getMessage());
//        }
//    }

	
	
	
}
