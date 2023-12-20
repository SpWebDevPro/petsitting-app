/**
 * 
 */
package fr.aston.petSitting.controllers;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import fr.aston.petSitting.entities.Booking;
import fr.aston.petSitting.handler.BookingModelHandler;
import fr.aston.petSitting.modele.BookingModel;
import fr.aston.petSitting.services.AnimalService;
import fr.aston.petSitting.services.BookingService;
import fr.aston.petSitting.services.ServiceSitterService;

/**
 * @author F_CHAMAR
 *
 */


@CrossOrigin(origins = "*", allowedHeaders = "*")
@RestController
@RequestMapping("/booking")
public class BookingController {

	@Autowired
	private BookingService bookingService;
	
	@Autowired
	private AnimalService animalService;
	@Autowired
	private ServiceSitterService sitterService;


	@PostMapping("/create")
	public ResponseEntity<?> createBooking(@RequestBody BookingModel bookingModele) {
	
		Booking resultat = this.bookingService
				.createBooking(BookingModelHandler.createEntityFromModel(bookingModele, this.animalService, this.sitterService));
		BookingModel resultatModel = BookingModelHandler.createModelFromEntity(resultat);
		return ResponseEntity.ok(resultatModel);
	}

	@GetMapping("sitter/list/{idUser}/{status}")
	public ResponseEntity<?> getBookingsOfSitterByStatus(@PathVariable("idUser") int idUser, @PathVariable("status") String status) {
	
		List<Booking> resultat = this.bookingService
				.getBookingsBySitterIDByStatus(idUser, status);
		return ResponseEntity.ok(resultat);
	}
	
	@PutMapping("/{bookingId}/{status}")
	public int updateBookingStatus(@PathVariable("bookingId") int idUser, @PathVariable("status") String status) {
	
		int resultat = this.bookingService
				.updateBookingSattus(idUser, status);
		return resultat;
	}
	
}
