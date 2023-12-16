package fr.aston.petSitting.handler;

import java.util.ArrayList;
import java.util.List;

import fr.aston.petSitting.entities.AnimalEntity;
import fr.aston.petSitting.entities.Booking;
import fr.aston.petSitting.entities.ServiceEntity;
import fr.aston.petSitting.entities.User;
import fr.aston.petSitting.modele.FindAllByDailyPriceBetweenOrTypeModelOut;
import fr.aston.petSitting.modele.ServiceModele;
import fr.aston.petSitting.services.UserService;

public class ServiceEntityModelHandler {

	public static ServiceModele createModelFromEntity(ServiceEntity serviceEntity) {
		ServiceModele serviceModele = new ServiceModele();
		serviceModele.setId(serviceEntity.getId());
		serviceModele.setDailyPrice(serviceEntity.getDailyPrice());
		serviceModele.setName(serviceEntity.getName());
		serviceModele.setDescription(serviceEntity.getDescription());
		serviceModele.setType(serviceEntity.getType());
		serviceModele.setUserId(serviceEntity.getUser().getId());
		serviceModele.setUser(serviceEntity.getUser());
		return serviceModele;
	}

	public static List<ServiceModele> createListModelFromEntities(List<ServiceEntity> serviceEntities) {
		List<ServiceModele> listModele = new ArrayList<>();
		for (ServiceEntity se : serviceEntities) {
			listModele.add(ServiceEntityModelHandler.createModelFromEntity(se));
		}
		return listModele;
	}

	public static ServiceEntity createEntityFromModel(ServiceModele serviceModele, UserService userService) {
		ServiceEntity serviceEntity = new ServiceEntity();
		serviceEntity.setId(serviceModele.getId());
		serviceEntity.setDailyPrice(serviceModele.getDailyPrice());
		serviceEntity.setName(serviceModele.getName());
		serviceEntity.setDescription(serviceModele.getDescription());
		serviceEntity.setType(serviceModele.getType());
		User userEntity = userService.getUserById(serviceModele.getUserId());
		serviceEntity.setUser(userEntity);
		return serviceEntity;

	}

	public static FindAllByDailyPriceBetweenOrTypeModelOut fromEntity(ServiceEntity serviceEntity) {
		FindAllByDailyPriceBetweenOrTypeModelOut resu = new FindAllByDailyPriceBetweenOrTypeModelOut();
		resu.setDailyPrice(serviceEntity.getDailyPrice());

		resu.setDescription(serviceEntity.getDescription());
		resu.setId(serviceEntity.getId());
		resu.setName(serviceEntity.getName());
		resu.setType(serviceEntity.getType());
		resu.setUserId(serviceEntity.getUser().getId());
		resu.setUserName(serviceEntity.getUser().getFirstName());
		List<Booking> bookingEntities = serviceEntity.getBookings();

		if (bookingEntities != null && !bookingEntities.isEmpty()) {
			List<Integer> bookingIdies = new ArrayList<Integer>();
			for (Booking e : bookingEntities) {
				bookingIdies.add(e.getId());
			}

			resu.setBookings(bookingIdies);
		}
		return resu;
	}

	public static List<FindAllByDailyPriceBetweenOrTypeModelOut> fromEntities(List<ServiceEntity> serviceEntities) {
		List<FindAllByDailyPriceBetweenOrTypeModelOut> resu = new ArrayList<FindAllByDailyPriceBetweenOrTypeModelOut>();
		for (ServiceEntity serviceEntity : serviceEntities) {
			resu.add(fromEntity(serviceEntity));
		}
		return resu;
	}



}
