package fr.aston.petSitting.modele;
import java.math.BigDecimal;
import java.util.Date;

import fr.aston.petSitting.entities.AnimalGenderEnum;
import fr.aston.petSitting.entities.AnimalTypeEnum;
import jakarta.persistence.EnumType;
import jakarta.persistence.Enumerated;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;


@Data
@NoArgsConstructor
@AllArgsConstructor
public class AnimalModel {
	private int userId;
	private int id;
	@Enumerated(EnumType.STRING)
	private AnimalTypeEnum type;
	private AnimalGenderEnum gender;
	private BigDecimal weight;
	private Date dateOfBirth;
	private Boolean isVaccinated;
	private Boolean isSterilized;
	private String petName;
	private String breed;
	private Boolean isSocial;
	private String petPhoto;
	
	
	
	
}
