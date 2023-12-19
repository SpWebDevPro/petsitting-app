/**
 * 
 */
package fr.aston.petSitting.repositories;

import static org.junit.jupiter.api.Assertions.*;

import org.junit.jupiter.api.Test;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.context.SpringBootTest;

import fr.aston.petSitting.entities.RoleEnum;
import fr.aston.petSitting.entities.User;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

/**
 * @author F_CHAMAR
 *
 */

@SpringBootTest
class UserRepositoryTest {
	@Getter
	@Setter


	@Autowired
	UserRepository userRepo;

	@Test
	void testInsert() throws Exception {
		User user = new User();
		user.setFirstName("ALex");
		user.setLastName("Dupon");
		user.setEmail("Alex.Daupon@gmail.com");
		user.setPassword("password");
		user.setAddress("2 rue de charles de Gaulle");
		user.setCity("Paris");
		user.setPays("Franec");
		user.setPostalCode("75000");
		user.setRole(RoleEnum.SITTER);
		user.setTelephone("0625422222");
		User userSaved = userRepo.save(user);

		assertEquals(user.getEmail(), userSaved.getEmail());

		assertNotNull(userSaved);

	}

	@Test
	void testFindByEmail() {
		fail("Not yet implemented");
	}

	@Test
	void testFindByFirstNameContains() {
	}

}
