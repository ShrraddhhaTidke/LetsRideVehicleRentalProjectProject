package com.example.demo.dto;

import java.sql.Blob;
import java.time.LocalDate;
import java.util.Objects;

import javax.persistence.Column;
import javax.persistence.EnumType;
import javax.persistence.Enumerated;
import javax.persistence.ManyToOne;
import javax.validation.constraints.NotBlank;

import com.example.demo.entity.Location;
import com.example.demo.entity.Status;
import com.example.demo.entity.VehicleCategory;
import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonProperty.Access;

public class VehicleDTO  {
	
	@JsonProperty("vehicle_id")
	private Long vehicleId;
//	@NotBlank(message = "Contact number must be supplied")
	private String brand;
	
	private String model;
	
	private String mfgYear;
	
	private String transmission;
	
	private String fuel;
	
	private String cappacity;
	
	private String imagePath;
	
	private String rentPerDay;

	
	
	public String getRentPerDay() {
		return rentPerDay;
	}

	public void setRentPerDay(String rentPerDay) {
		this.rentPerDay = rentPerDay;
	}

	public VehicleDTO() {
		super();
	}
	

	public VehicleDTO(Long vehicleId, String brand, String model, String mfgYear, String transmission, String fuel,
			String cappacity, String imagePath, String rentPerDay) {
		super();
		this.vehicleId = vehicleId;
		this.brand = brand;
		this.model = model;
		this.mfgYear = mfgYear;
		this.transmission = transmission;
		this.fuel = fuel;
		this.cappacity = cappacity;
		this.imagePath = imagePath;
		this.rentPerDay = rentPerDay;
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

	

	public String getImagePath() {
		return imagePath;
	}

	public void setImagePath(String imagePath) {
		this.imagePath = imagePath;
	}

	@Override
	public String toString() {
		return "VehicleDTO [vehicleId=" + vehicleId + ", brand=" + brand + ", model=" + model + ", mfgYear=" + mfgYear
				+ ", transmission=" + transmission + ", fuel=" + fuel + ", cappacity=" + cappacity + ", imagePath="
				+ imagePath + ", rentPerDay=" + rentPerDay + "]";
	}

	
	
	
}
