/**
 * 
 */
package fr.aston.petSitting.repositories;

import org.springframework.data.jpa.repository.JpaRepository;

import fr.aston.petSitting.models.Service;

/**
 * @author F_CHAMAR
 *
 */

public interface ServiceRepository extends JpaRepository<Service, Long> {

}
