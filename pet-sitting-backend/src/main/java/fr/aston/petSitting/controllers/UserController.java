package fr.aston.petSitting.controllers;

import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import fr.aston.petSitting.entities.User;
import fr.aston.petSitting.handler.UserModelHandler;
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
}
