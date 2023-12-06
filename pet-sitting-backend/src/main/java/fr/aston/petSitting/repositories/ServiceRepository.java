/**
 * 
 */
package fr.aston.petSitting.repositories;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import fr.aston.petSitting.entities.Service;


@Repository

public interface ServiceRepository extends JpaRepository<Service, Integer> {

}
