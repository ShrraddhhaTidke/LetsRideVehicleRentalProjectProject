package com.example.demo.service;

import java.util.List;

import com.example.demo.dto.VehicleDTO;
import com.example.demo.entity.Status;
import com.example.demo.entity.Vehicle;

public interface IVehicleService {
//get all vehicle
	List<Vehicle> getAllVehicleDetails();
	
	
	//update booked vehicle status vehicle

	Vehicle updateVehicleStatus(Vehicle vehicle);
	
	
	boolean loadDatabase( )throws Exception;


	List<Vehicle> getAllAvailableVehicle();


	Vehicle getVhicleDetails(Long id);
	
	VehicleDTO getVhicleById(Long id);


	Vehicle getSortedVhicleDetails(String city, String categoryName);


	List<Vehicle> findByCityAndCategoryName(String city, String categoryName);


	



	
	
}
