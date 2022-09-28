package com.example.demo.service;

import java.util.List;
import java.util.Optional;

import javax.validation.Valid;

import org.springframework.mail.MailException;

import com.example.demo.dto.UserDTO;
import com.example.demo.dto.UserRegResponse;
import com.example.demo.entity.User;


public interface IUserService {
	
	List<User> getAllUser();
	Optional <User> validateUser(String email,String password);
	User authenticateUser(String em, String pass);
	UserDTO saveUserDetail(UserDTO user);
	String deleteUserDetails(Long id);
	UserDTO getUserDetails(Long userId);
//	User getUserByPassword(String password);
//	String updatePassword(String token, String email);
//	User getUserById(Long userId);
	String registerUserDetail(UserDTO userDto) throws MailException, InterruptedException;
	User findUserPassword(String email) throws MailException, InterruptedException;
	
}
