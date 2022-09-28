package com.example.demo.controller;

import java.io.IOException;
import java.util.List;

import javax.servlet.http.HttpSession;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.MediaType;
import org.springframework.http.ResponseEntity;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.multipart.MultipartFile;
import org.springframework.web.servlet.mvc.support.RedirectAttributes;

import com.example.demo.dto.VehicleDTO;
import com.example.demo.entity.User;
import com.example.demo.entity.Vehicle;
import com.example.demo.service.IUserService;
import com.example.demo.service.IVehicleService;
import com.example.demo.service.ImageHandlingService;

@RestController
@RequestMapping("/home")
@CrossOrigin("http://localhost:3000")
public class HomeController {

	@Autowired
	private IVehicleService vehicleService;
//	@Autowired
//	private IUserService userService;
//	@Autowired
//	private ImageHandlingService imageHandlingService;
	
	public  HomeController (){

		System.out.println("in home ctor");
	}
	
	@GetMapping("/loadDb")
	private String loadDatabases() throws Exception {
		 vehicleService.loadDatabase();
		 return "All vehicle has been  SAVED Successfully";
	}
	
	@GetMapping("/vehicles")
	public List<Vehicle> getAllAvlVeicles() throws Exception {
	
		return vehicleService.getAllAvailableVehicle();
	}
	
	@GetMapping("/vehicles/{id}")
	public ResponseEntity<?> getVhicleDetails(@PathVariable Long id) throws Exception {
//	public Vehicle getVhicleDetails(@PathVariable int id) throws Exception {
		System.out.println("in get vehicle " + id);
		Vehicle vehicle = vehicleService.getVhicleDetails(id);
//		return vehicleService.getVhicleDetails((long) id);
		return ResponseEntity.ok(vehicle);
	}
	

//		// add req handling method to download image for specific vehicle
//		@GetMapping(value="/{vehicleId}/image", produces = { MediaType.IMAGE_GIF_VALUE, MediaType.IMAGE_JPEG_VALUE,
//				MediaType.IMAGE_PNG_VALUE })
//		public ResponseEntity<?> downloadImage(@PathVariable Long vehicleId) throws IOException{
//			System.out.println("in img download " + vehicleId);
//			//invoke service layer method , to get image data from the server side folder
//			byte[] imageContents=imageHandlingService.restoreImage(vehicleId);
//			return ResponseEntity.ok(imageContents);
//		}
	 
		
//	@GMapping("/bookvehicle/{id}")	
//	public Vehicle updateVehicleStatus(Vehicle vehicle) {
//		return vehicle;
//		
//	}

	@PutMapping("/vehicle/{vehicleId}")
	public String updateVehicleStatus(@PathVariable Vehicle vehicle) {
		vehicleService.updateVehicleStatus(vehicle);
		return "Vehicle Booked Successfuy";
	}
	
	@GetMapping("/vehicles/{city}/{categoryName}")
	public ResponseEntity<?> findByCityAndCategoryName(@PathVariable String city,@PathVariable String categoryName) throws Exception {

		System.out.println("in get specific vehicle " );
		List<Vehicle> vehicle = vehicleService.findByCityAndCategoryName(city,categoryName);
//		return vehicleService.getVhicleDetails((long) id);
		return ResponseEntity.ok(vehicle);
	}
	
	
	
	
}
