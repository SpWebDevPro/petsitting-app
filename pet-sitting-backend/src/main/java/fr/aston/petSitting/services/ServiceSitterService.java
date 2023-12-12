package fr.aston.petSitting.services;

import java.math.BigDecimal;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import fr.aston.petSitting.entities.ServiceEntity;
import fr.aston.petSitting.entities.ServiceEnum;
import fr.aston.petSitting.repositories.ServiceRepository;

@Service
public class ServiceSitterService {

	@Autowired
	private ServiceRepository serviceRepository;

	public List<ServiceEntity> getServicesByUserId(int userId) {
		return this.serviceRepository.findAllByUserId(userId);
	}

	public List<ServiceEntity> findAllByServiceType(BigDecimal minPrice, BigDecimal maxPrice, ServiceEnum type) {
		if (minPrice == null) {
			minPrice = BigDecimal.valueOf(0);
		}
		return this.serviceRepository.findAllByDailyPriceBetweenAndType(minPrice, maxPrice, type);
	}

	public ServiceEntity createService(ServiceEntity serviceEntity) {
		return this.serviceRepository.save(serviceEntity);
	}

	public void deleteServiceById(int id) {
		this.serviceRepository.deleteById(id);
	}

}
