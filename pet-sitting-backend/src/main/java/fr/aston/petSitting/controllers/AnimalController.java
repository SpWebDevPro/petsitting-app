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

import fr.aston.petSitting.entities.Animal;
import fr.aston.petSitting.entities.ServiceEntity;
import fr.aston.petSitting.entities.ServiceEnum;
import fr.aston.petSitting.entities.User;
import fr.aston.petSitting.handler.AnimalModelHandler;
import fr.aston.petSitting.handler.ServiceEntityModelHandler;
import fr.aston.petSitting.handler.UserModelHandler;
import fr.aston.petSitting.modele.AnimalModel;
import fr.aston.petSitting.modele.ResponseModele;
import fr.aston.petSitting.modele.ServiceModele;
import fr.aston.petSitting.services.AnimalService;
import fr.aston.petSitting.services.UserService; // Added import statement for UserService

@CrossOrigin(origins = "*", allowedHeaders = "*")
@RestController
@RequestMapping("/animal")
public class AnimalController {
	@Autowired
	private AnimalService animalService;

	@Autowired
	private UserService userService; // Added UserService autowired field

	@GetMapping("/list/{idUser}")
	public ResponseEntity<List<AnimalModel>> getAnimalListByUserId(@PathVariable("idUser") int idUser) {
		List<Animal> resultat = this.animalService.getAnimalListByUserId(idUser);
		List<AnimalModel> resultatModel = AnimalModelHandler.createListModelFromEntities(resultat);
		return ResponseEntity.ok(resultatModel);
	}

	@PostMapping("/create")
	public ResponseEntity<?> createAnimalControler(@RequestBody AnimalModel animalModel) {
		Animal resultat = this.animalService
				.createAnimal(AnimalModelHandler.createEntityFromModel(animalModel, userService));
		return ResponseEntity.ok(AnimalModelHandler.createModelFromEntity(resultat));

	}


}
