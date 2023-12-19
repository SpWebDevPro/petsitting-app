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
		userModel.setAbout(user.getAbout());
		userModel.setFirstName(user.getFirstName());
		userModel.setLastName(user.getLastName());
		userModel.setEmail(user.getEmail());
		userModel.setPassword(user.getPassword());
		userModel.setAddress(user.getAddress());
		userModel.setCity(user.getCity());
		userModel.setPostalCode(user.getPostalCode());
		userModel.setDateOfBirth(user.getDateOfBirth());
		userModel.setHasGarden(user.getHasGarden());
		userModel.setHasVehicule(user.getHasVehicule());
		userModel.setLivingSpace(user.getLivingSpace());
		userModel.setRole(user.getRole());
		userModel.setPassword(user.getPays());
		userModel.setStatus(user.getStatus());
		userModel.setTelephone(user.getPays());
		userModel.setPays(user.getTelephone());


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
