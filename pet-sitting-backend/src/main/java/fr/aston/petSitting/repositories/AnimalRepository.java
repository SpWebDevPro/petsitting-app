
package fr.aston.petSitting.repositories;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import fr.aston.petSitting.entities.Animal;
import fr.aston.petSitting.entities.ServiceEntity;
import fr.aston.petSitting.entities.ServiceEnum;

@Repository
public interface AnimalRepository extends JpaRepository<Animal, Integer> {

	Animal save(ServiceEntity serviceEntity);

	List<Animal> findAllByUserId(int userId);

}
