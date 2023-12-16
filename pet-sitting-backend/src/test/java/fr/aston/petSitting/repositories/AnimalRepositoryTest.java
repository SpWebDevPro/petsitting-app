/**
 * 
 */
package fr.aston.petSitting.repositories;

import java.math.BigDecimal;
import java.util.Date;

import org.junit.jupiter.api.Assertions;
import org.junit.jupiter.api.Test;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.context.SpringBootTest;

import fr.aston.petSitting.entities.AnimalEntity;
import fr.aston.petSitting.entities.AnimalTypeEnum;
import fr.aston.petSitting.entities.GenderEnum;
import fr.aston.petSitting.entities.User;

/**
 * @author F_CHAMAR
 *
 */

@SpringBootTest
class AnimalRepositoryTest {

	@Autowired

	AnimalRepository animalRepository;

	@Autowired
	UserRepository userRepo;

	@Test
	void testInsert() {

		AnimalEntity catToInsert = new AnimalEntity();
		catToInsert.setDateOfBirth(new Date());
		catToInsert.setGender(GenderEnum.FEMALE);
		catToInsert.setIsSocial(true);
		catToInsert.setIsSterilized(true);
		catToInsert.setIsVaccinated(true);
		catToInsert.setPetName("Luna");
		catToInsert.setType(AnimalTypeEnum.CAT);
		catToInsert.setWeight(new BigDecimal(1.0));
		 User user = userRepo.findById(2).get();

		 catToInsert.setUser(user);

		AnimalEntity insertedCat = animalRepository.save(catToInsert);
		Assertions.assertNotNull(insertedCat, "The returned object must exist");
		Assertions.assertTrue(insertedCat.getId() > 0, "The Id must exist");
	}
}
