package fr.aston.petSitting.controllers;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import fr.aston.petSitting.entities.ServiceEntity;
import fr.aston.petSitting.entities.ServiceEnum;
import fr.aston.petSitting.handler.ServiceEntityModelHandler;
import fr.aston.petSitting.modele.ResponseModele;
import fr.aston.petSitting.modele.ServiceModele;
import fr.aston.petSitting.services.ServiceSitterService;
import fr.aston.petSitting.services.UserService;

@CrossOrigin(origins = "*", allowedHeaders = "*")
@RestController
@RequestMapping("/sitterservice")
public class SitterServiceControler {

	@Autowired
	private ServiceSitterService service;

	@Autowired
	private UserService userService;

	@GetMapping("/list/{idUser}")
	public ResponseEntity<List<ServiceModele>> getSitterServiceListControler(@PathVariable("idUser") int idUser) {
		List<ServiceEntity> resultat = this.service.getServicesByUserId(idUser);
		System.out.println("+++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++");

		List<ServiceModele> resultatModel = ServiceEntityModelHandler.createListModelFromEntities(resultat);
		return ResponseEntity.ok(resultatModel);
	}

	@PostMapping("/create")
	public ResponseEntity<?> createSitterServiceControler(@RequestBody ServiceModele serviceModele) {
		if (serviceModele == null || !serviceModele.hasUserId()) {
			ResponseModele responseModele = new ResponseModele();
			responseModele.setStatus(400);
			responseModele.setMessage("Données invalides");
			return ResponseEntity.status(HttpStatus.BAD_REQUEST).body(responseModele);
		}
		// TODO check if user role is SITTER or PARENTANDSITTER;
		ServiceEntity resultat = this.service
				.createService(ServiceEntityModelHandler.createEntityFromModel(serviceModele, this.userService));
		ServiceModele resultatModel = ServiceEntityModelHandler.createModelFromEntity(resultat);
		return ResponseEntity.ok(resultatModel);
	}

	@GetMapping("/delete/{id}")
	public ResponseEntity<?> deleteSitterServiceById(@PathVariable("id") int id) {
		this.service.deleteServiceById(id);
		ResponseModele responseModele = new ResponseModele();
		responseModele.setStatus(202);
		responseModele.setMessage("Service supprimé");
		return ResponseEntity.status(HttpStatus.ACCEPTED).body(responseModele);
	}

	@GetMapping("/lists")
	public ResponseEntity<List<ServiceModele>> getSitterServiceWithType(
			@RequestParam(name = "type", required = false) String type,
			@RequestParam(name = "city", required = false) String city) {

		System.out.println(type);
		System.out.println(city);
		List<ServiceEntity> resultat = this.service.selectServicewithType(ServiceEnum.getEnum(type), city);

		List<ServiceModele> resultatModel = ServiceEntityModelHandler.createListModelFromEntities(resultat);
		return ResponseEntity.ok(resultatModel);
	}

}
