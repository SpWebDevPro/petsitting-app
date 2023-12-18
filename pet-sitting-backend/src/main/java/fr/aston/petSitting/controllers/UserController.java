package fr.aston.petSitting.controllers;

import org.springframework.beans.factory.annotation.Autowired;
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



