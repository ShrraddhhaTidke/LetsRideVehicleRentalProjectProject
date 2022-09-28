package com.example.demo.dto;


import com.fasterxml.jackson.annotation.JsonProperty;

public class LocationDTO {
	
	@JsonProperty("locid")
	private Long locationId;
//	@NotBlank(message = "House no must be supplied")
	private String house;
//	@NotBlank(message = "Street must be supplied")
	private String street;
//	@NotBlank(message = "Area must be supplied")
	private String area;
//	@NotBlank(message = "City must be supplied")
	private String city;
//	@NotBlank(message = "State must be supplied")
	private String state;
//	@Length(max=6,message = "Invalid pincode length")
//	@NotBlank(message = "Pincode must be supplied")
	private String pincode;
	
	
	public LocationDTO() {
		super();
	}

	

	public LocationDTO(Long locationId, String house, String street, String area, String city, String state,
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
		return "LocationDTO [locationId=" + locationId + ", house=" + house + ", street=" + street + ", area=" + area
				+ ", city=" + city + ", state=" + state + ", pincode=" + pincode + "]";
	}
}
