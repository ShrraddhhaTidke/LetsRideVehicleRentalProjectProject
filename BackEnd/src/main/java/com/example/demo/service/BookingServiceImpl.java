package com.example.demo.service;

import javax.validation.Valid;

import org.modelmapper.ModelMapper;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;
import org.springframework.web.bind.annotation.PathVariable;

import com.example.demo.dto.BookingDTO;
import com.example.demo.dto.UserDTO;
import com.example.demo.dto.VehicleDTO;
import com.example.demo.entity.Booking;
import com.example.demo.entity.User;
import com.example.demo.entity.Vehicle;
import com.example.demo.repository.IBookingDao;
import com.example.demo.repository.IUserDao;
import com.example.demo.repository.IVehicleDao;

@Service
@Transactional
public class BookingServiceImpl implements IBookingService {
	@Autowired
	private IBookingDao bDao;

	@Autowired
	private IVehicleDao vDao;

	@Autowired
	private IUserDao uDao;

	@Autowired
	private ModelMapper mapper;

	@Override
	public BookingDTO getBookingDetails(Long bookingId) {
		Booking booking = bDao.findByBookingId(bookingId);
		BookingDTO bookinDto = mapper.map(booking, BookingDTO.class);

		return bookinDto;
	}

	@Override
	public BookingDTO saveBookingDetail(BookingDTO bookingDto, Long userId, Long vehicleId) {
		Booking booking = mapper.map(bookingDto, Booking.class);

		User user = uDao.findByUserId(userId);
		Vehicle vehicle = vDao.getByVehicleId(vehicleId);
		vehicle.setStatus("UNAVAILABLE");
		booking.setUserId(user);
		booking.setVehicleId(vehicle);
		Booking persistentbooking = bDao.save(booking);
		return mapper.map(persistentbooking, BookingDTO.class);
	}

//	@Autowired
//	private IEmailSenderService emailSenderService;
//
//	@Override     
//	public String applyForLearning(LearningLicense ll) throws MailException, InterruptedException {
//		if (learningRepo.save(ll) != null) {
//			emailSenderService.sendSimpleEmail(ll.getEmail(),
//				"Dear " + ll.getFirstName() + " " + ll.getLastName() + ",\n\n"                             
//			+ "Congratulations! You have successfully filled the Learning license application form.\n\n"                             
//						+ "Your Applicant ID is : " + ll.getApplicantId() + "\n"                             
//			+ "Login to the system using Registered email ID and Password.\n\n"                             
//						+ "You can check your application status from the E-RTO Portal.\n"                             
//			+ "Mail Regarding test schedule will reach you within 48 hours.\n"                             
//						+ "Wish you the Best of Luck for the test process.\n" + "\n"                             
//			+ "In case you have any query, you can connect with us at rtoprojectedac2021@gmail.com\n"                             + "\n" + "Warm Regards,\n" + "eRTO Group,\n" + "CDAC IACSD Services",                     "eRTO Learning License Application
//		}
//	}

	@Override
	public BookingDTO returnVehicleDetails(BookingDTO bookingDto, Long userId, Long vehicleId) {
		Booking booking = mapper.map(bookingDto, Booking.class);

		User user = uDao.findByUserId(userId);
		Vehicle vehicle = vDao.getByVehicleId(vehicleId);
		vehicle.setStatus("AVAILABLE");
//		booking.setUserId(null);
//		booking.setVehicleId(null);
		Booking persistentbooking = bDao.save(booking);
		return mapper.map(persistentbooking, BookingDTO.class);
	}

	@Override
	public BookingDTO updateBookingDetails(BookingDTO updatedDetachedBooking) {
		Booking booking = mapper.map(updatedDetachedBooking, Booking.class);
		Booking updatedBooking = bDao.save(booking);
		return mapper.map(updatedBooking, BookingDTO.class);
	}

	@Override
	public String deleteBookingDetails(Long bookingId) {
		// TODO Auto-generated method stub
		return null;
	}

}
