/**
 * 
 */
package fr.aston.petSitting.repositories;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;

import fr.aston.petSitting.models.User;

/**
 * @author F_CHAMAR
 *
 */

public interface UserRepository extends JpaRepository<User, Long> {
	
	public User findByEmail(String email);
	public List<User> findByFirstNameContains(String name);

}
