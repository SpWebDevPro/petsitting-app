/**
 * 
 */
package fr.aston.petSitting.repositories;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Modifying;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;
import org.springframework.transaction.annotation.Transactional;

import fr.aston.petSitting.entities.Booking;

@Repository
public interface BookingRepository extends JpaRepository<Booking, Integer> {

	

	@Query("select b from Booking b left join b.service s join s.user u   where b.service = s  And s.user =u and u.id= :idUser AND b.status= :status")
	public List<Booking> getBookingsBySitterIdByStatus(int idUser, String status);
		
	@Transactional
	@Modifying
	@Query("update Booking b set b.status = :status  where b.id = :bookingId")
	public int updateBookingStatus(int bookingId , String status);
}

