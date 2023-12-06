package fr.aston.petSitting.services;


import fr.aston.petSitting.entities.User;

/**
 * @author F_CHAMAR
 *
 */
public interface UserService {
 
	public User saveUser(User user);
	public User getUser(Long id);

	public User findByUEmail(String email);

}
