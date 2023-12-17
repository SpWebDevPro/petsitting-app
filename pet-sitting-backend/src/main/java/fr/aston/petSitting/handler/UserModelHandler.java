/**
 * 
 */
package fr.aston.petSitting.handler;

import java.util.ArrayList;
import java.util.List;

import fr.aston.petSitting.entities.ServiceEntity;
import fr.aston.petSitting.entities.User;
import fr.aston.petSitting.modele.ServiceModele;
import fr.aston.petSitting.modele.UserModel;
import fr.aston.petSitting.services.UserService;

/**
 * @author F_CHAMAR
 *
 */

public class UserModelHandler {
	
	public static UserModel createModelFromEntity(User user) {
		UserModel userModel = new UserModel();
		userModel.setId(user.getId());
		userModel.setAbout(userModel.getAbout());
		userModel.setFirstName(userModel.getFirstName());
		userModel.setLastName(userModel.getLastName());
		userModel.setEmail(userModel.getEmail());
		userModel.setPassword(userModel.getPassword());
		userModel.setAddress(userModel.getAddress());
		userModel.setCity(userModel.getCity());
		userModel.setPostalCode(userModel.getPostalCode());
		userModel.setDateOfBirth(userModel.getDateOfBirth());
		userModel.setHasGarden(userModel.getHasGarden());
		userModel.setHasVehicule(userModel.getHasVehicule());
		userModel.setLivingSpace(userModel.getLivingSpace());
		userModel.setRole(userModel.getRole());
		userModel.setPassword(userModel.getPays());
		userModel.setStatus(userModel.getStatus());
		userModel.setTelephone(userModel.getPays());
		userModel.setPays(userModel.getTelephone());


		return userModel;
	}
	
	
	public static User createEntityFromModel(UserModel userModel) {
		User user = new User();
		user.setId(userModel.getId());
		user.setAbout(userModel.getAbout());
		user.setFirstName(userModel.getFirstName());
		user.setLastName(userModel.getLastName());
		user.setEmail(userModel.getEmail());
		user.setPassword(userModel.getPassword());
		user.setAddress(userModel.getAddress());
		user.setCity(userModel.getCity());
		user.setPostalCode(userModel.getPostalCode());
		user.setDateOfBirth(userModel.getDateOfBirth());
		user.setHasGarden(userModel.getHasGarden());
		user.setHasVehicule(userModel.getHasVehicule());
		user.setLivingSpace(userModel.getLivingSpace());
		user.setRole(userModel.getRole());
		user.setPassword(userModel.getPays());
		user.setStatus(userModel.getStatus());
		user.setTelephone(userModel.getPays());
		user.setPays(userModel.getTelephone());
		return user;


	}
	
	public static List<UserModel> createListModelFromEntities(List<User> listUser) {
		List<UserModel> listModels = new ArrayList<>();
		for (User u : listUser) {
			listModels.add(UserModelHandler.createModelFromEntity(u));
		}
		return listModels;
	}
}
