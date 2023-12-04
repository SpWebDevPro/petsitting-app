
package fr.aston.petSitting.repositories;

import org.springframework.data.jpa.repository.JpaRepository;

import fr.aston.petSitting.models.Animal;

/**
 * @author F_CHAMAR
 *
 */

public interface AnimalRepository extends JpaRepository<Animal, Long> {

}
