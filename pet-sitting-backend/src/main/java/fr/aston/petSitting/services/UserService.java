package fr.aston.petSitting.services;

import java.util.Optional;

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

	
	public User createUser(User user) {
		return this.userRepository.save(user);
	}
	
	public Optional<User>  getUserByEmailAndPassword(String email, String password) {
		return this.userRepository.findByEmailAndPassword(email, password);
	}
}
