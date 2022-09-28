package com.example.demo.service;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.security.core.userdetails.UserDetailsService;
import org.springframework.security.core.userdetails.UsernameNotFoundException;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import com.example.demo.entity.User;
import com.example.demo.repository.IUserDao;


@Service // or @Component also works!
@Transactional
public class MyUserDetailsService implements UserDetailsService {

	@Autowired
	private IUserDao userDao;
	
	@Override
	public UserDetails loadUserByUsername(String username) throws UsernameNotFoundException {
		System.out.println("in load by user nm " + username);
		// invoke dao's method to load user details from db by username(ie. actaully an
		// email)
		User user = userDao.
				findByEmail(username);
//				orElseThrow(() -> new UsernameNotFoundException("Invalid Email ID "));
		System.out.println("lifted user dtls from db "+user);
		return new CustomUserDetails(user);
		
	}

}
