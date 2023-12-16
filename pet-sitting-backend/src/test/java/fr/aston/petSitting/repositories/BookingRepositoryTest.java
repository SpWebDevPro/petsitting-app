/**
 * 
 */
package fr.aston.petSitting.repositories;

import java.math.BigDecimal;
import java.util.Date;

import org.junit.jupiter.api.Assertions;
import org.junit.jupiter.api.Test;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.context.SpringBootTest;

import fr.aston.petSitting.entities.Booking;

/**
 * @author F_CHAMAR
 *
 */

@SpringBootTest
class BookingRepositoryTest {

	@Autowired
	private BookingRepository bookingRepository;

	@Autowired
	private AnimalRepository animalRepository;

	@Autowired
	private ServiceRepository ServiceRepository;

	@Test
	void testInsert() throws Exception {
		Booking booking = new Booking();
		booking.setStartDate(new Date());
		booking.setEndDate(new Date());
		booking.setTotalPrice(new BigDecimal(345.32));
		booking.setAnimalEntity(animalRepository.findById(1).get());
		booking.setService(ServiceRepository.findById(1).get());

		Booking bokkingInserted = this.bookingRepository.save(booking);
		Assertions.assertNotNull(bokkingInserted, "The returned object must exist");
		Assertions.assertNotNull(bokkingInserted.getId() > 0, "The Id must exist");

	}
}
