package com.example.demo.dto;

import java.time.LocalDate;


import com.example.demo.entity.Location;
import com.example.demo.entity.User;
import com.example.demo.entity.Vehicle;
import com.fasterxml.jackson.annotation.JsonProperty;

public class BookingDTO {

	@JsonProperty("booking_id")
	private Long bookingId;
//		@NotBlank(message = "Pickup date must be supplied")
	private LocalDate pickupDate;
//		@NotBlank(message = "Drop date must be supplied")
	private LocalDate dropDate;
//		@NotBlank(message = "User Id must be supplied")
	private UserDTO userId;
//		@NotBlank(message = "Vehicle Id must be supplied")
	private VehicleDTO vehicleId;
//		@NotBlank(message = "Deposit ammount must be supplied")
	private Integer deposit;
//		@NotBlank(message = "Total ammount must be supplied")
	private Integer totalpay;
////		@NotBlank(message = "Vhicle rental loation must be supplied")
//	private Location rentalLocation;
////		@NotBlank(message = "Vhicle return loation must be supplied")
//	private Location returnLocation;

	public BookingDTO() {
		super();
	}

	public BookingDTO(Long bookingId, LocalDate pickupDate, LocalDate dropDate, UserDTO userId, VehicleDTO vehicleId,
			Integer deposit, Integer totalpay) {
		super();
		this.bookingId = bookingId;
		this.pickupDate = pickupDate;
		this.dropDate = dropDate;
		this.userId = userId;
		this.vehicleId = vehicleId;
		this.deposit = deposit;
		this.totalpay = totalpay;
//		this.rentalLocation = rentalLocation;
//		this.returnLocation = returnLocation;
	}

	

	@Override
	public String toString() {
		return "BookingDTO [bookingId=" + bookingId + ", pickupDate=" + pickupDate + ", dropDate=" + dropDate
				+ ", userId=" + userId + ", vehicleId=" + vehicleId + ", deposit=" + deposit + ", totalpay=" + totalpay
				+ "]";
	}

	public Long getBookingId() {
		return bookingId;
	}

	public void setBookingId(Long bookingId) {
		this.bookingId = bookingId;
	}

	public LocalDate getPickupDate() {
		return pickupDate;
	}

	public void setPickupDate(LocalDate pickupDate) {
		this.pickupDate = pickupDate;
	}

	public LocalDate getDropDate() {
		return dropDate;
	}

	public void setDropDate(LocalDate dropDate) {
		this.dropDate = dropDate;
	}

	public UserDTO getUserId() {
		return userId;
	}

	public void setUserId(UserDTO userId) {
		this.userId = userId;
	}

	public VehicleDTO getVehicleId() {
		return vehicleId;
	}

	public void setVehicleId(VehicleDTO vehicleId) {
		this.vehicleId = vehicleId;
	}

	public Integer getDeposit() {
		return deposit;
	}

	public void setDeposit(Integer deposit) {
		this.deposit = deposit;
	}

	public Integer getTotalpay() {
		return totalpay;
	}

	public void setTotalpay(Integer totalpay) {
		this.totalpay = totalpay;
	}

	

}
