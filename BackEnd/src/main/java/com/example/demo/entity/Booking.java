package com.example.demo.entity;

import java.time.LocalDate;

import javax.persistence.CascadeType;
import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.JoinColumn;
import javax.persistence.ManyToOne;
import javax.persistence.OneToOne;
import javax.persistence.Table;
import javax.validation.constraints.NotNull;

import com.fasterxml.jackson.annotation.JsonProperty;



@Entity
@Table(name="booking")
public class Booking {
	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	@JsonProperty("booking_id")
	private Long bookingId;
	@Column(name = "pickup_date")
	private LocalDate pickupDate;
	@Column(name = "drop_date")
	private LocalDate dropDate;
	@OneToOne(cascade = CascadeType.PERSIST)
	@JoinColumn(name = "user_id")
	private User userId;
	@OneToOne(cascade = CascadeType.PERSIST)
	@JoinColumn(name = "vehicle_id")
	private Vehicle vehicleId;
	
	
	private Integer deposit;
	private Integer totalpay;
	
//	@OneToOne
//	@JoinColumn(name = "location_id" , referencedColumnName = "locationId", insertable = false, updatable = false)
//	@NotNull
//	private Location rentalLocation;
//	@OneToOne
//	private Location returnLocation;
	
	
	
	public Booking() {
		super();
	}



	public Booking(Long bookingId, LocalDate pickupDate, LocalDate dropDate, User userId, Vehicle vehicleId,
			Integer deposit, Integer totalpay) {
		super();
		this.bookingId = bookingId;
		this.pickupDate = pickupDate;
		this.dropDate = dropDate;
		this.userId = userId;
		this.vehicleId = vehicleId;
		this.deposit = deposit;
		this.totalpay = totalpay;
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



	public User getUserId() {
		return userId;
	}



	public void setUserId(User userId) {
		this.userId = userId;
	}



	public Vehicle getVehicleId() {
		return vehicleId;
	}



	public void setVehicleId(Vehicle vehicleId) {
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



//	public Location getRentalLocation() {
//		return rentalLocation;
//	}
//
//
//
//	public void setRentalLocation(Location rentalLocation) {
//		this.rentalLocation = rentalLocation;
//	}
//
//
//
////	public Location getReturnLocation() {
////		return returnLocation;
////	}
////
////
////
////	public void setReturnLocation(Location returnLocation) {
////		this.returnLocation = returnLocation;
////	}



	@Override
	public String toString() {
		return "Booking [bookingId=" + bookingId + ", pickupDate=" + pickupDate + ", dropDate=" + dropDate + ", userId="
				+ userId + ", vehicleId=" + vehicleId + ", deposit=" + deposit + ", totalpay=" + totalpay + "]";
	}



	



	



	


	
	
}

