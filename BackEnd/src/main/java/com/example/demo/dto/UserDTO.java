package com.example.demo.dto;


import java.time.LocalDate;

import javax.persistence.Column;
import javax.validation.constraints.Email;
import javax.validation.constraints.Future;
import javax.validation.constraints.NotBlank;
import javax.validation.constraints.Pattern;


import org.hibernate.validator.constraints.Length;

import com.example.demo.entity.Status;
import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonProperty.Access;



public class UserDTO {
	
	@JsonProperty("user_id")
	private Long userId;
//	@NotBlank(message = "First name must be supplied")
//	@Length(min=4,max=30,message = "Invalid first name length")
	private String firstName;
//	@NotBlank(message = "Last name must be supplied")
	private String lastName;
	
	private String dlNo;
	@Email(message = "Invalid Email")
	private String email;
//	@Pattern(regexp="((?=.*\\d)(?=.*[a-z])(?=.*[#@$*]).{5-20})")
	@JsonProperty(access = Access.WRITE_ONLY)
	private String password;
//	@NotBlank(message = "Contact number must be supplied")
	private String phone;
//	@NotBlank(message = "Address must be supplied")
	private LocationDTO address;
	@Future(message = "Driving licence  expiry date must be in future")

	private LocalDate dLExpiryDate;

	private String rentPerDay;
	
    private String resetPasswordToken;
	
	public UserDTO() {
		super();
	}
	

	


	public UserDTO(Long userId, String firstName, String lastName, String dlNo, String email, String password,
			String phone, LocationDTO address, LocalDate dLExpiryDate, String rentPerDay, String resetPasswordToken,
			Status status, LocalDate localDate) {
		super();
		this.userId = userId;
		this.firstName = firstName;
		this.lastName = lastName;
		this.dlNo = dlNo;
		this.email = email;
		this.password = password;
		this.phone = phone;
		this.address = address;
		this.dLExpiryDate = dLExpiryDate;
		this.rentPerDay = rentPerDay;
		this.resetPasswordToken = resetPasswordToken;
		this.status = status;
		this.localDate = localDate;
	}

	public String getRentPerDay() {
		return rentPerDay;
	}

	public void setRentPerDay(String rentPerDay) {
		this.rentPerDay = rentPerDay;
	}

	public String getResetPasswordToken() {
		return resetPasswordToken;
	}

	public void setResetPasswordToken(String resetPasswordToken) {
		this.resetPasswordToken = resetPasswordToken;
	}
	public Long getUserId() {
		return userId;
	}
	public void setUserId(Long userId) {
		this.userId = userId;
	}
	public String getFirstName() {
		return firstName;
	}
	public void setFirstName(String firstName) {
		this.firstName = firstName;
	}
	public String getLastName() {
		return lastName;
	}
	public void setLastName(String lastName) {
		this.lastName = lastName;
	}
	public String getDlNo() {
		return dlNo;
	}
	public void setDlNo(String dlNo) {
		this.dlNo = dlNo;
	}
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
	public String getPhone() {
		return phone;
	}
	public void setPhone(String phone) {
		this.phone = phone;
	}
	public LocationDTO getAddress() {
		return address;
	}
	public void setAddress(LocationDTO address) {
		this.address = address;
	}
	public LocalDate getdLExpiryDate() {
		return dLExpiryDate;
	}
	public void setdLExpiryDate(LocalDate dLExpiryDate) {
		this.dLExpiryDate = dLExpiryDate;
	}
	public Status getStatus() {
		return status;
	}
	public void setStatus(Status status) {
		this.status = status;
	}
	public LocalDate getLocalDate() {
		return localDate;
	}
	public void setLocalDate(LocalDate localDate) {
		this.localDate = localDate;
	}
	private Status status;
	private LocalDate localDate = LocalDate.now();

	@Override
	public String toString() {
		return "UserDTO [userId=" + userId + ", firstName=" + firstName + ", lastName=" + lastName + ", dlNo=" + dlNo
				+ ", email=" + email + ", password=" + password + ", phone=" + phone + ", address=" + address
				+ ", dLExpiryDate=" + dLExpiryDate + ", rentPerDay=" + rentPerDay + ", resetPasswordToken="
				+ resetPasswordToken + ", status=" + status + ", localDate=" + localDate + "]";
	}

	
	
}
