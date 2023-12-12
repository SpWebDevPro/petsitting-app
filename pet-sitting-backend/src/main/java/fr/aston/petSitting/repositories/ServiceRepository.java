/**
 * 
 */
package fr.aston.petSitting.repositories;

import java.math.BigDecimal;
import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;

import fr.aston.petSitting.entities.ServiceEntity;
import fr.aston.petSitting.entities.ServiceEnum;


@Repository

public interface ServiceRepository extends JpaRepository<ServiceEntity, Integer> {
 
	// @Query("FROM ServiceEntity WHERE user.id = :userid ")
		// public List<ServiceEntity> getServicesByUserId(@Param("userid") int userId);

		// au lieu d'utiliser une méthode query ===> on peut utiliser les mots clefs
		public List<ServiceEntity> findAllByUserId(int userId);

		public List<ServiceEntity> findAllByDailyPriceBetweenAndType(BigDecimal minPrice, BigDecimal maxPrice,
				ServiceEnum type);

		 @Query("select s from ServiceEntity s left join s.user u WHERE  (s.type = :type OR :type is null)AND  upper(u.city) like '%' || upper(:city ) || '%'  ")
		public List<ServiceEntity> getServices(ServiceEnum type, String city);
		

}
 