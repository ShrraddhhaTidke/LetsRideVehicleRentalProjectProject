package com.example.demo.repository;

import java.util.ArrayList;
import java.util.Optional;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;

import com.example.demo.dto.UserDTO;
import com.example.demo.entity.User;

public interface IUserDao extends JpaRepository<User, Long>{
//	User validateUser(String email, String password);
	Optional<User> findByEmailAndPassword(String email, String password);
	
		
	User findByEmail(String email);
	User findByUserId(Long userId);
	User findByResetPasswordToken(String token);
	ArrayList<User> findAll();
}
