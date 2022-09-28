package com.example.demo.service;

import java.util.List;
import java.util.Optional;

import org.modelmapper.ModelMapper;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.mail.MailException;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import com.example.demo.dto.LocationDTO;
import com.example.demo.dto.UserDTO;
import com.example.demo.dto.UserRegResponse;
import com.example.demo.entity.Location;
import com.example.demo.entity.User;
import com.example.demo.repository.IUserDao;

@Service
@Transactional
public class UserServiceImpl implements IUserService {
	@Autowired
	private IUserDao userDao;

	@Autowired
	private ModelMapper mapper;

	@Autowired
	private BCryptPasswordEncoder encoder;

	@Autowired
	private IEmailService emailSenderService;

	@Override
	public List<User> getAllUser() {
		// TODO Auto-generated method stub
		return userDao.findAll();
	}

	@Override
	public Optional<User> validateUser(String email, String password) {
		Optional<User> user = userDao.findByEmailAndPassword(email, password);
		if (user != null) {
			return user;
		}

		return null;
	}

	@Override
	public User authenticateUser(String em, String pass) {
		// simply call dao's method for db based authentication
		return userDao.findByEmailAndPassword(em, pass)
				.orElseThrow(() -> new RuntimeException("Invalid email or password"));
	}

	@Override
	public UserDTO saveUserDetail(UserDTO userDto) {

		User user = mapper.map(userDto, User.class);
		user.setPassword(encoder.encode(userDto.getPassword()));
		User persistentUser = userDao.save(user);
		return mapper.map(persistentUser, UserDTO.class);
	}

	@Override
	public User findUserPassword(String email) throws MailException, InterruptedException {
		User u = userDao.findByEmail(email);
		if (u != null) {
			emailSenderService.sendSimpleEmail(u.getEmail(),
					"Hello " + u.getFirstName() + "\n" + "your password is: " + u.getPassword() + "\n "
							+ "Keep Your Password Secure and Protected" + "\n" + "Warm Regards,\n" + "Let's Ride ,\n"
							+ "CDAC IACSD Services",
					"Let's Ride team");
		}
		return u;
	}

	@Override
	public String registerUserDetail(UserDTO userDto) throws MailException, InterruptedException {
		String email = userDto.getEmail();
		User user = mapper.map(userDto, User.class);
		user.setPassword(encoder.encode(userDto.getPassword()));
//		User persistentUser= userDao.save(user);
		User newUser = userDao.findByEmail(email);
		if (newUser != null) {
			return "Email already Registered!!!";
		}
		System.out.println(user);
		User persistentUser = userDao.save(user);
		if (persistentUser != null) {
			emailSenderService.sendSimpleEmail(user.getEmail(),
					"Dear " + user.getFirstName() + " " + user.getLastName() + ",\n"
							+ "Congratulations! You have successfully registered on the Let's Ride Portal.\n" + "\n"
							+ "Warm Regards,\n" + "Let's Ride Group,\n" + "CDAC IACSD Services",
					"Let's Ride Registration");
			return "Registered Successfully!!";
		}
		emailSenderService.sendSimpleEmail(user.getEmail(), "Registration Failed!! Try Again!!",
				"Let's Ride Registration Failed!!");
		return "Not Registered!!";

//		mapper.map(persistentUser, UserDTO.class);

	}

	@Override
	public String deleteUserDetails(Long userId) {
		String mesg = "Deletion of User details failed!!!!!!!!!!!";

		if (userDao.existsById(userId)) {
			userDao.deleteById(userId);
			mesg = "User details deleted successfully , for user id :" + userId;
		}

		return mesg;
	}

	public UserDTO getUserDetails(Long userId) {
		User user = userDao.findByUserId(userId);
		UserDTO userDto = mapper.map(user, UserDTO.class);
		return userDto;
	}

//	@Override
//	public String updatePassword(String token, String email) {
//		User user = userDao.findByEmail(email);
//        if (user != null) {
//        	user.setResetPasswordToken(token);
//        	userDao.save(user);
//        	return email;
//        } else {
//           return "Could not find any user with the email " + email;
//        }
//		
//    }
//     
//    public User getByResetPasswordToken(String token) {
//        return userDao.findByResetPasswordToken(token);
//	}
//    public void updatePassword(User user, String newPassword) {
//        BCryptPasswordEncoder passwordEncoder = new BCryptPasswordEncoder();
//        String encodedPassword = passwordEncoder.encode(newPassword);
//        user.setPassword(encodedPassword);
//         
//        user.setResetPasswordToken(null);
//        userDao.save(user);
//    }

}
