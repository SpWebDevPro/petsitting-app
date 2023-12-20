/**
 * 
 */
package fr.aston.petSitting.services;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import fr.aston.petSitting.entities.Booking;
import fr.aston.petSitting.repositories.BookingRepository;

/**
 * @author F_CHAMAR
 *
 */

@Service
public class BookingService {


	  @Autowired
	  private BookingRepository bookingRepository;

	  public List<Booking> getBookingsBySitterIDByStatus(int userId, String status){
	    return this.bookingRepository.getBookingsBySitterIdByStatus(userId,  status);
	  }

	
	  public Booking createBooking(Booking booking) {
	    return this.bookingRepository.save(booking);
	  }

	

	public Booking getBookingById(int id) {
	  return this.bookingRepository.findById(id).orElse(null);
	}

	public int updateBookingSattus(int id, String status) {
		  return this.bookingRepository.updateBookingStatus(id, status);
		}
	}


