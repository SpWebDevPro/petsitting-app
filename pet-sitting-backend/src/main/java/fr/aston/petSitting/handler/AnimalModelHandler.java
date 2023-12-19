package fr.aston.petSitting.handler;

import java.util.ArrayList;
import java.util.List;

import fr.aston.petSitting.entities.Animal;
import fr.aston.petSitting.modele.AnimalModel;

public class AnimalModelHandler {
	public static AnimalModel createModelFromEntity(Animal animal) {
		AnimalModel animalModel = new AnimalModel();
		animalModel.setPet_name(animal.getPetName());
		animalModel.setType(animal.getType());
		animalModel.setBreed(animal.getBreed());
		animalModel.setGender(animal.getGender());
		animalModel.setWeight(animal.getWeight());
		animalModel.setDate_of_birth(animal.getDateOfBirth());
		animalModel.setIs_social(animal.getIsSocial());
		animalModel.setIs_sterilized(animal.getIsSterilized());
		animalModel.setIs_vaccinated(animal.getIsVaccinated());
		animalModel.setPet_photo(animal.getPetPhoto());
		animalModel.setUser_id(animal.getUser().getId());		
		
		return animalModel;
	}
	public static List<AnimalModel> createListModelFromEntities (List<Animal> animals){
		List<AnimalModel> ListModel = new ArrayList<>();
		for (Animal animal : animals) {
			ListModel.add(AnimalModelHandler.createModelFromEntity(animal));
			
		}
		return ListModel;
	}
	
}