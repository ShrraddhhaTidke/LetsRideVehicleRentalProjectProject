package com.example.demo.repository;

import javax.validation.Valid;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.example.demo.dto.BookingDTO;
import com.example.demo.entity.Booking;

@Repository
public interface IBookingDao extends JpaRepository<Booking, Integer>{

	Booking save(@Valid BookingDTO booking);

	Booking findByBookingId(Long bookingId);

	boolean existsByBookingId(Long bookingId);

	void deleteByBookingId(Long bookingId);



	

	
}
