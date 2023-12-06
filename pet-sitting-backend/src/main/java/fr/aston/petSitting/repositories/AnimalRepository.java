
package fr.aston.petSitting.repositories;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import fr.aston.petSitting.entities.Animal;

@Repository
public interface AnimalRepository extends JpaRepository<Animal, Integer> {

}
