/**
 * 
 */
package fr.aston.petSitting.repositories;

import org.springframework.data.jpa.repository.JpaRepository;

import fr.aston.petSitting.models.Booking;

/**
 * @author F_CHAMAR
 *
 */

public interface BookingRepository extends JpaRepository<Booking, Long> {

}
