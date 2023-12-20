
package fr.aston.petSitting.controllers;
 
import java.util.Optional;
 
import org.springframework.beans.factory.annotation.Autowired;

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
			
		User resultat = this.userService.createUser(user);

		return ResponseEntity.ok(UserModelHandler.createModelFromEntity(resultat));

	}
	
	@GetMapping("/login")
	public ResponseEntity<?> getUserByEmailAndPasswordController(@RequestParam(name = "email", required = true) String email,
			@RequestParam(name = "password", required = true) String password) {
		Optional<User>  userConncted =  this.userService.getUserByEmailAndPassword(email, password);

				return ResponseEntity.ok(userConncted);

	}


	@GetMapping("/{idUser}")
	public ResponseEntity<UserModel> getUserByIdControler(@PathVariable("idUser") int idUser) {
			User resultat = this.userService.getUserById(idUser);
			System.out.println(resultat);
			System.out.println("-----------------------------------------------------------------");
			System.out.println(resultat.getFirstName());
			System.out.println("-----------------------------------------------------------------");
			UserModel resultatModel = UserModelHandler.createModelFromEntity(resultat);
			return ResponseEntity.ok(resultatModel);
		
	}
	
	@PostMapping("/update/{idUser}")
	public ResponseEntity<UserModel> updateUserByIdControler(@RequestBody User user, @PathVariable("idUser") int idUser) {
		
		System.out.println("-----------------updateUserByIdControler-------------------------------");
	
		User resultat = this.userService.updateUserById(idUser, user);

		return ResponseEntity.ok(UserModelHandler.createModelFromEntity(resultat));

	}




}




