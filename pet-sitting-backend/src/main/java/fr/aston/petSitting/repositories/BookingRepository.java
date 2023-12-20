/**
 * 
 */
package fr.aston.petSitting.repositories;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import fr.aston.petSitting.entities.Booking;

@Repository
public interface BookingRepository extends JpaRepository<Booking, Integer> {



	
}
