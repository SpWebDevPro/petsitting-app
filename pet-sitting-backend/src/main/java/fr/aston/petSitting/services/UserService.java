package fr.aston.petSitting.services;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import fr.aston.petSitting.entities.User;
import fr.aston.petSitting.repositories.UserRepository;


@Service
public class UserService {

	@Autowired
	private UserRepository userRepository;

	public User getUserById(int id) {
		return this.userRepository.findById(id).get();
	}

}
