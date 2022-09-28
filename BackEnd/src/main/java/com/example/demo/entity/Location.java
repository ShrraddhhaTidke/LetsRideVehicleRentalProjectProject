package com.example.demo.entity;


import java.util.Objects;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.Table;

import com.fasterxml.jackson.annotation.JsonProperty;

@Entity
@Table(name="location")
public class Location {
	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	@JsonProperty("location_id")
	private Long locationId;
	@Column(length = 30)
	private String house;
	@Column(length = 30)
	private String street;
	@Column(length = 30)
	private String area;
	@Column(length = 30)
	private String city;
	@Column(length = 30)
	private String state;
	@Column(length = 30)
	private String pincode;
	
	public Location() {
		super();
	}
	
	public Location(String city) {
		super();
		this.city = city;
	}
	
	public Location(Long locationId, String house, String street, String area, String city, String state,
			String pincode) {
		super();
		this.locationId = locationId;
		this.house = house;
		this.street = street;
		this.area = area;
		this.city = city;
		this.state = state;
		this.pincode = pincode;
	}



	public Long getLocationId() {
		return locationId;
	}

	public void setLocationId(Long locationId) {
		this.locationId = locationId;
	}

	public String getHouse() {
		return house;
	}

	public void setHouse(String house) {
		this.house = house;
	}

	public String getStreet() {
		return street;
	}

	public void setStreet(String street) {
		this.street = street;
	}

	public String getArea() {
		return area;
	}

	public void setArea(String area) {
		this.area = area;
	}

	public String getCity() {
		return city;
	}

	public void setCity(String city) {
		this.city = city;
	}

	public String getState() {
		return state;
	}

	public void setState(String state) {
		this.state = state;
	}

	public String getPincode() {
		return pincode;
	}

	public void setPincode(String pincode) {
		this.pincode = pincode;
	}

	@Override
	public String toString() {
		return "Location [locationId=" + locationId + ", house=" + house + ", street=" + street + ", area=" + area
				+ ", city=" + city + ", state=" + state + ", pincode=" + pincode + "]";
	}

	@Override
	public int hashCode() {
		return Objects.hash(area, city, house, locationId, pincode, state, street);
	}

	@Override
	public boolean equals(Object obj) {
		if (this == obj)
			return true;
		if (obj == null)
			return false;
		if (getClass() != obj.getClass())
			return false;
		Location other = (Location) obj;
		return Objects.equals(area, other.area) && Objects.equals(city, other.city)
				&& Objects.equals(house, other.house) && Objects.equals(locationId, other.locationId)
				&& Objects.equals(pincode, other.pincode) && Objects.equals(state, other.state)
				&& Objects.equals(street, other.street);
	}
	
	
}


