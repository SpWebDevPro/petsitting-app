/**
 * 
 */
package fr.aston.petSitting.modele;

import java.math.BigDecimal;
import java.util.Date;

import fr.aston.petSitting.entities.AccomodationTypeEnum;
import fr.aston.petSitting.entities.RoleEnum;
import fr.aston.petSitting.entities.StatusEnum;
import jakarta.persistence.EnumType;
import jakarta.persistence.Enumerated;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

/**
 * @author F_CHAMAR
 *
 */

@Data
@AllArgsConstructor
@NoArgsConstructor
public class UserModel {

	private int id;
	private AccomodationTypeEnum accomodationType;
	private String address;
	private String city;
	private Date dateOfBirth;
	private String email;
	private String firstName;
	private Boolean hasGarden;
	private Boolean hasVehicule;
	private String lastName;
	private BigDecimal livingSpace;
	private String password;
	private String pays;
	private String postalCode;
	private String about;
	private RoleEnum role;
	@Enumerated(EnumType.STRING)
	private StatusEnum status;
	private String telephone;
}
