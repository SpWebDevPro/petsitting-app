package fr.aston.petSitting.services;

import java.util.List;

import fr.aston.petSitting.models.Sitter;
import fr.aston.petSitting.models.User;

/**
 * @author F_CHAMAR
 *
 */
public interface UserService {
 
	public User saveUser(User user);
	public User getUser(Long id);
	public Sitter getSitter(Long id);

	public Sitter editSitter(Sitter sitter);
	public User findByUEmail(String email);
	public List<Sitter> findByRole(String role);

}
