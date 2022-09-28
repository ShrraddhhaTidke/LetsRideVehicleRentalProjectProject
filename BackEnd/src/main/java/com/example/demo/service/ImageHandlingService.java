package com.example.demo.service;

import java.io.IOException;

import org.springframework.web.multipart.MultipartFile;

import com.example.demo.dto.VehicleDTO;


public interface ImageHandlingService {
	VehicleDTO storeImage(Long vehicleId, MultipartFile imageFile) throws IOException;

	byte[] restoreImage(Long vehicleId)throws IOException ;
	
	
}
