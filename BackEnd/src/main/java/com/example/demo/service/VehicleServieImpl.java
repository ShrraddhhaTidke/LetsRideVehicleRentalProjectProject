package com.example.demo.service;

import java.util.List;

import org.modelmapper.ModelMapper;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.example.demo.dto.VehicleDTO;
//import com.example.demo.entity.Status;
import com.example.demo.entity.Vehicle;
import com.example.demo.repository.IVehicleDao;
import com.example.demo.utils.DataUtils;


@Service
public class VehicleServieImpl implements IVehicleService {
	@Autowired
	private IVehicleDao vehicleDao;
	
	@Autowired
	private ModelMapper mapper;
		
	@Override
	public List<Vehicle> getAllVehicleDetails() {
	
		return vehicleDao.findAll();
	}
	
	@Override
	public List<Vehicle> getAllAvailableVehicle() {
//			vehicleDao.findAllVehiclesByCategory(null);
		return vehicleDao.findAllVehiclesByStatus("AVAILABLE");
	}


	@Override
	public Vehicle updateVehicleStatus(Vehicle vehicle) {
		
		return null;
	}
	
	@Override
	public boolean loadDatabase() throws Exception {
		vehicleDao.saveAll(DataUtils.getListsOfvehicles());
		return true;
	}

	@Override
	public Vehicle getVhicleDetails(Long id) {
		Vehicle vehicle = vehicleDao.findByVehicleId(id);

		return vehicle;
	}

	@Override
	public List<Vehicle> findByCityAndCategoryName(String city, String categoryName) {
		
		List<Vehicle> vehicle = vehicleDao.findByCityAndCategoryNameAndStatus(city, categoryName,"AVAILABLE");
		
		return vehicle;
	}

	@Override
	public Vehicle getSortedVhicleDetails(String city, String categoryName) {
		// TODO Auto-generated method stub
		return null;
	}

	@Override
	public VehicleDTO getVhicleById(Long id) {
		Vehicle vehicle = vehicleDao.findByVehicleId(id);
		VehicleDTO vDto=mapper.map(vehicle,VehicleDTO.class);
		return vDto;
	}




//	@Override
//	public Vehicle updateVehicleStatus(Vehicle vehicle, Status status) {
//		vehicleDao.setStatus(Status.valueOf(UNAVAILABLE));
//		return null;
//	}

	



}
