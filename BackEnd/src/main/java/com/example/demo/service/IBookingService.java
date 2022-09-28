package com.example.demo.service;



import javax.validation.Valid;

import com.example.demo.dto.BookingDTO;
import com.example.demo.entity.Booking;

public interface IBookingService {

	
	BookingDTO getBookingDetails(Long id);


//	BookingDTO saveBookingDetail(@Valid BookingDTO booking);

	
	BookingDTO updateBookingDetails(BookingDTO bookingDto);

	String deleteBookingDetails(Long bookingId);


	BookingDTO saveBookingDetail(BookingDTO bookingDto, Long userId, Long vehicleId);


	BookingDTO returnVehicleDetails(BookingDTO bookingDto, Long userId, Long vehicleId);



	



	
	
}
