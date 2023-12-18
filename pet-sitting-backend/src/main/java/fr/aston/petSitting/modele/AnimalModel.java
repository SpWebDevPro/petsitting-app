package fr.aston.petSitting.modele;
import java.math.BigDecimal;
import java.util.Date;

import fr.aston.petSitting.entities.AnimalGenderEnum;
import fr.aston.petSitting.entities.AnimalTypeEnum;
import jakarta.persistence.EnumType;
import jakarta.persistence.Enumerated;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;


@Getter
@Setter
@NoArgsConstructor
public class AnimalModel {
	private int user_id;
	@Enumerated(EnumType.STRING)
	private AnimalTypeEnum type;
	private AnimalGenderEnum gender;
	private Float weight;
	private Date date_of_birth;
	private Boolean is_vaccinated;
	private Boolean is_sterilized;
	private String pet_name;
	private String breed;
	private Boolean is_social;
	private String pet_photo;
	
	public int getUser_id() {
		return user_id;
	}
	public void setUser_id(int user_id) {
		this.user_id = user_id;
	}
	public AnimalTypeEnum getType() {
		return type;
	}
	public void setType(AnimalTypeEnum type) {
		this.type = type;
	}
	public AnimalGenderEnum getGender() {
		return gender;
	}
	public void setGender(AnimalGenderEnum gender) {
		this.gender = gender;
	}
	public Float getWeight() {
		return weight;
	}
	public void setWeight(Float weight) {
		this.weight = weight;
	}
	public Date getDate_of_birth() {
		return date_of_birth;
	}
	public void setDate_of_birth(Date date_of_birth) {
		this.date_of_birth = date_of_birth;
	}
	public Boolean getIs_vaccinated() {
		return is_vaccinated;
	}
	public void setIs_vaccinated(Boolean is_vaccinated) {
		this.is_vaccinated = is_vaccinated;
	}
	public Boolean getIs_sterilized() {
		return is_sterilized;
	}
	public void setIs_sterilized(Boolean is_sterilized) {
		this.is_sterilized = is_sterilized;
	}
	public String getPet_name() {
		return pet_name;
	}
	public void setPet_name(String pet_name) {
		this.pet_name = pet_name;
	}
	public String getBreed() {
		return breed;
	}
	public void setBreed(String breed) {
		this.breed = breed;
	}
	public Boolean getIs_social() {
		return is_social;
	}
	public void setIs_social(Boolean is_social) {
		this.is_social = is_social;
	}
	public String getPet_photo() {
		return pet_photo;
	}
	public void setPet_photo(String pet_photo) {
		this.pet_photo = pet_photo;
	}
	public void setWeight(BigDecimal weight2) {
		// TODO Auto-generated method stub
		
	}	
	
	
}
