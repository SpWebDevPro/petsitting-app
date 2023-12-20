package fr.aston.petSitting.handler;

import java.util.ArrayList;
import java.util.List;

import fr.aston.petSitting.entities.Animal;
import fr.aston.petSitting.entities.Booking;
import fr.aston.petSitting.entities.ServiceEntity;
import fr.aston.petSitting.entities.User;
import fr.aston.petSitting.modele.AnimalModel;
import fr.aston.petSitting.modele.BookingModel;
import fr.aston.petSitting.services.AnimalService;
import fr.aston.petSitting.services.ServiceSitterService;
import fr.aston.petSitting.services.UserService;

public class BookingModelHandler {
	public static BookingModel createModelFromEntity(Booking booking) {
		BookingModel bookingModel = new BookingModel();
		bookingModel.setStartDate(booking.getStartDate());
		bookingModel.setEndDate(booking.getEndDate());
		bookingModel.setTotalPrice(booking.getTotalPrice());
		bookingModel.setServiceId(booking.getService().getId());
		bookingModel.setAnimalId(booking.getAnimal().getId());
         
		bookingModel.setStatus(booking.getStatus());
		return bookingModel;
	}

	public static List<BookingModel> createListModelFromEntities(List<Booking> bookings) {
		List<BookingModel> ListModel = new ArrayList<>();
		for (Booking booking : bookings) {
			ListModel.add(BookingModelHandler.createModelFromEntity(booking));

		}
		return ListModel;
	}

	public static Booking createEntityFromModel(BookingModel bookingModel, AnimalService animalService, ServiceSitterService sitterService) {
		Booking booking = new Booking();
		booking.setStartDate(bookingModel.getStartDate());
		booking.setEndDate(bookingModel.getEndDate());
		booking.setTotalPrice(bookingModel.getTotalPrice());
	    booking.setStatus(bookingModel.getStatus());
		Animal animal = animalService.getAnimalById(bookingModel.getAnimalId());
		booking.setAnimal(animal);
		ServiceEntity service = sitterService.getServiceById(bookingModel.getServiceId());
		booking.setService(service);

		return booking;

	}
}