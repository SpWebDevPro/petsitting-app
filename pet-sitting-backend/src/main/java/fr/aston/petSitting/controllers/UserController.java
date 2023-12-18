package fr.aston.petSitting.controllers;

import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
<<<<<<< HEAD
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import fr.aston.petSitting.entities.User;
import fr.aston.petSitting.handler.UserModelHandler;
import fr.aston.petSitting.modele.UserModel;
import fr.aston.petSitting.services.UserService;

@CrossOrigin(origins = "*", allowedHeaders = "*")
@RestController
@RequestMapping("/userservice")
public class UserController {

	@Autowired
	private UserService userService;

	// reste le cas d'un email déja existe
	@PostMapping("/create")
	public ResponseEntity<?> createUSerControler(@RequestBody User user) {
		
		System.out.println("-----------------------------------------------------------------");
	
		User resultat = this.userService.createUser(user);

		return ResponseEntity.ok(UserModelHandler.createModelFromEntity(resultat));

	}
	
	@GetMapping("/login")
	public ResponseEntity<?> getUserByEmailAndPasswordController(@RequestParam(name = "email", required = true) String email,
			@RequestParam(name = "password", required = true) String password) {
		System.out.println("-----------------------------------------------------------------");

		Optional<User>  userConncted =  this.userService.getUserByEmailAndPassword(email, password);

		
		System.out.println(userConncted);
		return ResponseEntity.ok(userConncted);

	}


	@GetMapping("/{idUser}")
	public ResponseEntity<UserModel> getUserByIdControler(@PathVariable("idUser") int idUser) {
		System.out.println("tu m'as appelé-----------------------------------------------------------------");
			User resultat = this.userService.getUserById(idUser);
			System.out.println(resultat);
			System.out.println("-----------------------------------------------------------------");
			System.out.println(resultat.getFirstName());
			System.out.println("-----------------------------------------------------------------");
			UserModel resultatModel = UserModelHandler.createModelFromEntity(resultat);
			return ResponseEntity.ok(resultatModel);
		
	}
}
=======
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import fr.aston.petSitting.entities.Animal;
import fr.aston.petSitting.entities.RoleEnum;
import fr.aston.petSitting.entities.User;
import fr.aston.petSitting.handler.ServiceEntityModelHandler;
import fr.aston.petSitting.modele.ResponseModele;
import fr.aston.petSitting.modele.ServiceModele;
import fr.aston.petSitting.repositories.UserRepository;

@CrossOrigin(origins = "*", allowedHeaders = "*")
@RestController
@RequestMapping("/user")
public class UserController {

	@Autowired
	private UserRepository userRepository;
	private Object userService;

	
//	@PostMapping("/create")
//	public ResponseEntity<ResponseModele> createSitterServiceControler(@RequestBody ServiceModele serviceModele) {
//		if (serviceModele == null || !serviceModele.hasUserId()) {
//			ResponseModele responseModele = new ResponseModele();
//			responseModele.setStatus(400);
//			responseModele.setMessage("Invalid data");
//			return ResponseEntity.status(HttpStatus.BAD_REQUEST).body(responseModele);
//		}
//		return ResponseEntity.ok()<ResponseModele>;
//
//		}
//	
	}



>>>>>>> flywayAndAnimalLucas
