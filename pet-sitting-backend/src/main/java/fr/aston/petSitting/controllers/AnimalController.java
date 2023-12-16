package fr.aston.petSitting.controllers;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import fr.aston.petSitting.entities.AnimalEntity;
import fr.aston.petSitting.entities.ServiceEntity;
import fr.aston.petSitting.entities.ServiceEnum;
import fr.aston.petSitting.handler.ServiceEntityModelHandler;
import fr.aston.petSitting.modele.AnimalModel;
import fr.aston.petSitting.modele.ResponseModele;
import fr.aston.petSitting.modele.ServiceModele;
import fr.aston.petSitting.services.AnimalService;
import fr.aston.petSitting.services.UserService; // Added import statement for UserService

@CrossOrigin(origins = "*", allowedHeaders = "*")
@RestController
@RequestMapping("/animal")
public class AnimalController{
  @Autowired
  private AnimalService animalService;

  @Autowired
  private UserService userService; // Added UserService autowired field

  @GetMapping("/list/{idUser}")
  public ResponseEntity<List<ServiceModele>> getSitterServiceListControler(@PathVariable("idUser") int idUser) {
    List<ServiceEntity> resultat = this.animalService.getServicesByUserId(idUser);
    List<ServiceModele> resultatModel = ServiceEntityModelHandler.createListModelFromEntities(resultat);
    return ResponseEntity.ok(resultatModel);
  }


  @GetMapping("/delete/{id}")
  public ResponseEntity<?> deleteSitterServiceById(@PathVariable("id") int id) {
    this.animalService.deleteAnimalService(id);
    ResponseModele responseModele = new ResponseModele();
    responseModele.setStatus(202);
    responseModele.setMessage("Service suppressed");
    return ResponseEntity.status(HttpStatus.ACCEPTED).body(responseModele);
  }

  @GetMapping("/lists")
  public ResponseEntity<List<ServiceModele>> getSitterServiceWithType(
      @RequestParam(name = "type", required = false) String type,
      @RequestParam(name = "city", required = false) String city) {

    System.out.println(type);
    System.out.println(city);
    List<ServiceEntity> resultat = this.animalService.selectServicewithType(ServiceEnum.getEnum(type), city);

    List<ServiceModele> resultatModel = ServiceEntityModelHandler.createListModelFromEntities(resultat);
    return ResponseEntity.ok(resultatModel);
  }

  // New mapping
  @GetMapping("/details/{id}")
  public ResponseEntity<AnimalModel> getAnimalDetails(@PathVariable("id") int id) {
    AnimalEntity animal = this.animalService.getAnimalById(id);
    AnimalModel animalModel = new AnimalModel(animal.getId(), animal.getPetName(), animal.getDateOfBirth(), animal.getBreed());
    return ResponseEntity.ok(animalModel);
  }
}
