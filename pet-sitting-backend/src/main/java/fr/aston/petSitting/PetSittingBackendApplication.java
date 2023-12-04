package fr.aston.petSitting;

import org.springframework.boot.CommandLineRunner;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.context.annotation.Bean;

import fr.aston.petSitting.models.Parent;
import fr.aston.petSitting.models.Service;
import fr.aston.petSitting.models.Sitter;
import fr.aston.petSitting.models.TypeService;
import fr.aston.petSitting.repositories.ServiceRepository;
import fr.aston.petSitting.repositories.UserRepository;

@SpringBootApplication
public class PetSittingBackendApplication {
	public static void main(String[] args) {
		SpringApplication.run(PetSittingBackendApplication.class, args);

	}

	@Bean
	CommandLineRunner commandLineRunner(UserRepository userRepo, ServiceRepository serviceRepo) {
		// Test the db
		Sitter sitter = new Sitter();
		sitter.setFirstName("ALEx");
		sitter.setEmail("email@email.com");
		Parent parent = new Parent();
		parent.setFirstName("Inch");
		parent.setEmail("email2@email.com");

		Service service1 = new Service(null, 12.5, TypeService.VISITEANIMAUX, "Mon service 1", "serice desciption...",
				null, sitter);
		return args -> {
//			userRepo.save(sitter);
//			userRepo.save(parent);
//			serviceRepo.save(service1);

		//	userRepo.findByFirstNameContains("Inch").stream().forEach(e -> System.out.println(e.getEmail()));
		///	System.out.println(userRepo.findByEmail("email@email.com").getFirstName());
		};

	}

}
