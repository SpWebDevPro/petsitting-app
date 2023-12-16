
package fr.aston.petSitting.repositories;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import fr.aston.petSitting.entities.AnimalEntity;
import fr.aston.petSitting.entities.ServiceEntity;
import fr.aston.petSitting.entities.ServiceEnum;

@Repository
public interface AnimalRepository extends JpaRepository<AnimalEntity, Integer> {

	List<ServiceEntity> selectServicewithType(ServiceEnum enum1, String city);

	List<ServiceEntity> getServicesByUserId(int idUser);

	AnimalEntity save(ServiceEntity serviceEntity);

}
