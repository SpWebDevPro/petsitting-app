/**
 * 
 */
package fr.aston.petSitting.repositories;

import java.math.BigDecimal;

import org.junit.jupiter.api.Assertions;
import org.junit.jupiter.api.Test;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.context.SpringBootTest;

import fr.aston.petSitting.entities.ServiceEntity;
import fr.aston.petSitting.entities.ServiceEnum;
import fr.aston.petSitting.entities.User;

/**
 * @author F_CHAMAR
 *
 */

@SpringBootTest
class ServiceRepositoryTest {

	@Autowired
	private ServiceRepository serviceRepository;

	@Autowired
	private UserRepository userRepository;

	@Test
	void testInsert() throws Exception {

		ServiceEntity serviceWalk = new ServiceEntity();
		User user = this.userRepository.findById(1).get();

		serviceWalk.setDailyPrice(BigDecimal.valueOf(15.5));
		serviceWalk.setDescription("Service description");
		serviceWalk.setName("My service walk");
		serviceWalk.setType(ServiceEnum.WALK);
		serviceWalk.setUser(user);

		ServiceEntity serviceWalkInserted = serviceRepository.save(serviceWalk);
		Assertions.assertNotNull(serviceWalkInserted, "The returned object must exist");
		Assertions.assertTrue(serviceWalkInserted.getId() > 0, "The Id must exist");

	}
}
