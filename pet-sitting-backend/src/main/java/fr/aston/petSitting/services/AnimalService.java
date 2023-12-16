package fr.aston.petSitting.services;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import fr.aston.petSitting.entities.AnimalEntity;
import fr.aston.petSitting.entities.ServiceEntity;
import fr.aston.petSitting.entities.ServiceEnum;
import fr.aston.petSitting.repositories.AnimalRepository;

@Service
public class AnimalService{

  @Autowired
  private AnimalRepository animalRepository;

  public List<AnimalEntity> getAnimalEntities(){
    return this.animalRepository.findAll();
  }

  public List<AnimalEntity> findAllByIdAndUserIdAndPetName(int id, int user_id, String pet_name){
    return this.findAllByIdAndUserIdAndPetName(id, user_id, pet_name);
  }

  public AnimalEntity createService(ServiceEntity serviceEntity) {
    return this.animalRepository.save(serviceEntity);
  }

  public void deleteAnimalService(int id) {
    this.animalRepository.deleteById(id);
  }

  public AnimalEntity createAnimal(AnimalEntity animalEntity) {
    return this.animalRepository.save(animalEntity);
  }

  public AnimalEntity updateAnimal(AnimalEntity animalEntity) {
    return this.animalRepository.save(animalEntity);
  }

public List<ServiceEntity> selectServicewithType(ServiceEnum enum1, String city) {
  return this.animalRepository.selectServicewithType(enum1, city);
}

public AnimalEntity getAnimalById(int id) {
  return this.animalRepository.findById(id).orElse(null);
}

public List<ServiceEntity> getServicesByUserId(int idUser) {
  return this.animalRepository.getServicesByUserId(idUser);
}
}
