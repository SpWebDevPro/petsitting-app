package fr.aston.petSitting.services;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import fr.aston.petSitting.entities.Animal;
import fr.aston.petSitting.repositories.AnimalRepository;

@Service
public class AnimalService{

  @Autowired
  private AnimalRepository animalRepository;

  public List<Animal> getAnimalListByUserId(int userId){
    return this.animalRepository.findAllByUserId(userId);
  }

  public void deleteAnimalById(int id) {
    this.animalRepository.deleteById(id);
  }

  public Animal createAnimal(Animal animal) {
    return this.animalRepository.save(animal);
  }

  public Animal updateAnimal(Animal animal) {
    return this.animalRepository.save(animal);
  }


public Animal getAnimalById(int id) {
  return this.animalRepository.findById(id).orElse(null);
}

}
