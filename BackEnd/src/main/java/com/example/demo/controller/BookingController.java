package com.example.demo.controller;

import javax.validation.Valid;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.example.demo.dto.BookingDTO;
import com.example.demo.service.IBookingService;
import com.example.demo.service.IUserService;
import com.example.demo.service.IVehicleService;



@RestController
@RequestMapping("/api/booking")
@CrossOrigin("http://localhost:3000")
public class BookingController {

	@Autowired
	private IBookingService bService;
	
	
	public  BookingController (){

		System.out.println("in booking ctor");
	}
	
	
	
	
	@GetMapping("/{bookingId}")
	public ResponseEntity<?> getBookingDetails(@PathVariable Long bookingId) throws Exception {

		System.out.println("in get Booking " + bookingId);
		BookingDTO booking = bService.getBookingDetails(bookingId);

		return ResponseEntity.ok(booking);
	}

	@PutMapping("/{bookingId}")
	public BookingDTO updateBookingDetails(@RequestBody BookingDTO bookingDto) {
		System.out.println("in update Booking " + bookingDto);
		return bService.updateBookingDetails(bookingDto);
		 
	}
	
	@DeleteMapping("/{bookingId}")
	public String canclelBooking(@PathVariable Long bookingId) {
		System.out.println("in cancel booking " + bookingId);
		return bService.deleteBookingDetails(bookingId);
	}
	
	
	
	@PostMapping("/addBooking/{userId}/{vehicleId}")
	public ResponseEntity<BookingDTO> addBooking(@RequestBody @Valid BookingDTO booking,@PathVariable Long userId,@PathVariable Long vehicleId){
		System.out.println("In save booking for vehicle"+ booking);
		
		
		return new ResponseEntity<>(bService.saveBookingDetail(booking,userId,vehicleId), HttpStatus.CREATED);
	}
	
	//delete or finish ride
	@PostMapping("/endBooking/{userId}/{vehicleId}")
	public ResponseEntity<BookingDTO> returnVehicleDetails(@RequestBody @Valid BookingDTO booking,@PathVariable Long userId,@PathVariable Long vehicleId){
		System.out.println("In save booking for vehicle"+ booking);
				
		return new ResponseEntity<>(bService.saveBookingDetail(booking,userId,vehicleId), HttpStatus.CREATED);
	}
	
	
	

	
}
