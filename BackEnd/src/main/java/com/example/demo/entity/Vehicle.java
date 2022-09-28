package com.example.demo.entity;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.Table;

import com.fasterxml.jackson.annotation.JsonProperty;


@Entity
@Table(name="vehicle")
public class Vehicle  {
	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	@JsonProperty("vehicle_id")
	private Long vehicleId;
	@Column(length = 30)
	private String brand;
	@Column(length = 30)
	private String model;
	@Column(length = 30)
	private String mfgYear;
	@Column(length = 30)
	private String transmission;
//	@ManyToOne
	private String categoryName;
	@Column(length = 30)
	private String fuel;
	@Column(length = 30)
	private String cappacity;
	@Column(length = 50)
	private String status;
	@Column(length = 300)
	private String city;
	@Column(length = 300)
	private String imagePath;
	@Column(length = 300)
	private String rentPerDay;
	
	public Vehicle() {
		super();
	}

	public Long getVehicleId() {
		return vehicleId;
	}

	public void setVehicleId(Long vehicleId) {
		this.vehicleId = vehicleId;
	}

	public String getBrand() {
		return brand;
	}

	public void setBrand(String brand) {
		this.brand = brand;
	}

	public String getModel() {
		return model;
	}

	public void setModel(String model) {
		this.model = model;
	}

	public String getMfgYear() {
		return mfgYear;
	}

	public void setMfgYear(String mfgYear) {
		this.mfgYear = mfgYear;
	}

	public String getTransmission() {
		return transmission;
	}

	public void setTransmission(String transmission) {
		this.transmission = transmission;
	}

	public String getCategoryName() {
		return categoryName;
	}

	public void setCategoryName(String categoryName) {
		this.categoryName = categoryName;
	}

	public String getFuel() {
		return fuel;
	}

	public void setFuel(String fuel) {
		this.fuel = fuel;
	}

	public String getCappacity() {
		return cappacity;
	}

	public void setCappacity(String cappacity) {
		this.cappacity = cappacity;
	}

	public String getStatus() {
		return status;
	}

	public void setStatus(String status) {
		this.status = status;
	}

	public String getCity() {
		return city;
	}

	public void setCity(String city) {
		this.city = city;
	}

	public String getImagePath() {
		return imagePath;
	}

	public void setImagePath(String imagePath) {
		this.imagePath = imagePath;
	}

	public String getRentPerDay() {
		return rentPerDay;
	}

	public void setRentPerDay(String rentPerDay) {
		this.rentPerDay = rentPerDay;
	}

	@Override
	public String toString() {
		return "Vehicle [vehicleId=" + vehicleId + ", brand=" + brand + ", model=" + model + ", mfgYear=" + mfgYear
				+ ", transmission=" + transmission + ", categoryName=" + categoryName + ", fuel=" + fuel
				+ ", cappacity=" + cappacity + ", status=" + status + ", city=" + city + ", imagePath=" + imagePath
				+ ", rentPerDay=" + rentPerDay + "]";
	}

	public Vehicle(Long vehicleId, String brand, String model, String mfgYear, String transmission, String categoryName,
			String fuel, String cappacity, String status, String city, String imagePath, String rentPerDay) {
		super();
		this.vehicleId = vehicleId;
		this.brand = brand;
		this.model = model;
		this.mfgYear = mfgYear;
		this.transmission = transmission;
		this.categoryName = categoryName;
		this.fuel = fuel;
		this.cappacity = cappacity;
		this.status = status;
		this.city = city;
		this.imagePath = imagePath;
		this.rentPerDay = rentPerDay;
	}


	

	
	
}
