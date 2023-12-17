/**
 * 
 */
package fr.aston.petSitting.repositories;

import java.util.List;
import java.util.Optional;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import fr.aston.petSitting.entities.User;

/**
 * @author F_CHAMAR
 *
 */

@Repository
public interface UserRepository extends JpaRepository<User, Integer> {
	
	
	public  Optional<User> findByEmailAndPassword(String email, String password);
	
	public List<User> findByFirstNameContains(String name);
	

}
