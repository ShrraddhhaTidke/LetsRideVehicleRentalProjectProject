package com.example.demo.service;

import java.io.File;
import java.io.IOError;
import java.io.IOException;
import java.nio.file.Files;
import java.nio.file.Paths;
import java.nio.file.StandardCopyOption;

import javax.transaction.Transactional;

import org.modelmapper.ModelMapper;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.boot.context.config.ConfigDataResourceNotFoundException;
import org.springframework.stereotype.Service;
import org.springframework.web.multipart.MultipartFile;

import com.example.demo.custom_exceptions.ResourceNotFoundException;
import com.example.demo.dto.VehicleDTO;
import com.example.demo.entity.Vehicle;
import com.example.demo.repository.IVehicleDao;

@Service
@Transactional
public class ImageHandlingServiceImpl implements ImageHandlingService {
	@Value("${file.upload.location}")
	private String baseFolder;
	@Autowired
	private IVehicleDao vehicleDao;
	@Autowired
	private ModelMapper mapper;
	@Override
	public VehicleDTO storeImage(Long vehicleId, MultipartFile imageFile) throws IOException {
		Vehicle vehicle =vehicleDao.findById(vehicleId).orElseThrow(()->new ResourceNotFoundException("Invalid Vehicle ID"));
		
		String completePath = baseFolder+File.separator+imageFile.getOriginalFilename();
		System.out.println("Complete Path"+completePath);
		System.out.println("Copied no of bytes"+Files.copy(imageFile.getInputStream(),Paths.get(completePath),StandardCopyOption.REPLACE_EXISTING));
		vehicle.setImagePath(completePath);
		return mapper.map(vehicle,VehicleDTO.class);
	}
	
	@Override
	public byte[] restoreImage(Long vehicleId) throws IOException {
		Vehicle vehicle =vehicleDao.findById(vehicleId).orElseThrow(()->new ResourceNotFoundException("Invalid Vehicle ID"));
		//get image path db to caller 
		String path =vehicle.getImagePath();
		System.out.println("image path:"+path);
		return Files.readAllBytes(Paths.get(path));
	} 

}
