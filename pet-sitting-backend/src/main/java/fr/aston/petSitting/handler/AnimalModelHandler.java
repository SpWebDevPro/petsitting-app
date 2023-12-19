package fr.aston.petSitting.handler;

import java.util.ArrayList;
import java.util.List;

import fr.aston.petSitting.entities.Animal;
import fr.aston.petSitting.entities.User;
import fr.aston.petSitting.modele.AnimalModel;
import fr.aston.petSitting.services.UserService;

public class AnimalModelHandler {
	public static AnimalModel createModelFromEntity(Animal animal) {
		AnimalModel animalModel = new AnimalModel();
		animalModel.setPetName(animal.getPetName());
		animalModel.setType(animal.getType());
		animalModel.setBreed(animal.getBreed());
		animalModel.setGender(animal.getGender());
		animalModel.setWeight(animal.getWeight());
		animalModel.setDateOfBirth(animal.getDateOfBirth());
		animalModel.setIsSocial(animal.getIsSocial());
		animalModel.setIsSterilized(animal.getIsSterilized());
		animalModel.setIsVaccinated(animal.getIsVaccinated());
		animalModel.setPetPhoto(animal.getPetPhoto());
		animalModel.setUserId(animal.getUser().getId());
		animalModel.setId(animal.getId());

		return animalModel;
	}

	public static List<AnimalModel> createListModelFromEntities(List<Animal> animals) {
		List<AnimalModel> ListModel = new ArrayList<>();
		for (Animal animal : animals) {
			ListModel.add(AnimalModelHandler.createModelFromEntity(animal));

		}
		return ListModel;
	}

	public static Animal createEntityFromModel(AnimalModel animalModel, UserService userService) {
		Animal animal = new Animal();
		animal.setPetName(animalModel.getPetName());
		animal.setType(animalModel.getType());
		animal.setBreed(animalModel.getBreed());
		animal.setGender(animalModel.getGender());
		animal.setWeight(animalModel.getWeight());
		animal.setDateOfBirth(animalModel.getDateOfBirth());
		animal.setIsSocial(animalModel.getIsSocial());
		animal.setIsSterilized(animalModel.getIsSterilized());
		animal.setIsVaccinated(animalModel.getIsVaccinated());
		animal.setPetPhoto(animalModel.getPetPhoto());
		animal.setId(animalModel.getId());
		User userEntity = userService.getUserById(animalModel.getUserId());
		animal.setUser(userEntity);

		return animal;

	}
}