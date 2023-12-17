package fr.aston.petSitting.entities;

import java.io.Serializable;
import java.math.BigDecimal;
import java.util.Date;
import java.util.List;

import com.fasterxml.jackson.annotation.JsonIgnore;

import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.EnumType;
import jakarta.persistence.Enumerated;
import jakarta.persistence.FetchType;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.Lob;
import jakarta.persistence.OneToMany;
import jakarta.persistence.Table;
import jakarta.persistence.Temporal;
import jakarta.persistence.TemporalType;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

/**
 * @author F_CHAMAR
 *
 */
@Entity

@Table(name = "user")

public class User implements Serializable {
	/**
	 * 
	 */
	public User() {
		super();
		// TODO Auto-generated constructor stub
	}

	/**
	 * @param id
	 * @param accomodationType
	 * @param address
	 * @param city
	 * @param dateOfBirth
	 * @param email
	 * @param firstName
	 * @param hasGarden
	 * @param hasVehicule
	 * @param lastName
	 * @param livingSpace
	 * @param password
	 * @param pays
	 * @param postalCode
	 * @param about
	 * @param role
	 * @param status
	 * @param telephone
	 * @param animals
	 * @param services
	 */
	public User(int id, AccomodationTypeEnum accomodationType, String address, String city, Date dateOfBirth,
			String email, String firstName, Boolean hasGarden, Boolean hasVehicule, String lastName,
			BigDecimal livingSpace, String password, String pays, String postalCode, String about, RoleEnum role,
			StatusEnum status, String telephone, List<Animal> animals, List<ServiceEntity> services) {
		super();
		this.id = id;
		this.accomodationType = accomodationType;
		this.address = address;
		this.city = city;
		this.dateOfBirth = dateOfBirth;
		this.email = email;
		this.firstName = firstName;
		this.hasGarden = hasGarden;
		this.hasVehicule = hasVehicule;
		this.lastName = lastName;
		this.livingSpace = livingSpace;
		this.password = password;
		this.pays = pays;
		this.postalCode = postalCode;
		this.about = about;
		this.role = role;
		this.status = status;
		this.telephone = telephone;
		this.animals = animals;
		this.services = services;
	}

	/**
	 * @return the id
	 */
	public int getId() {
		return id;
	}

	/**
	 * @param id the id to set
	 */
	public void setId(int id) {
		this.id = id;
	}

	/**
	 * @return the accomodationType
	 */
	public AccomodationTypeEnum getAccomodationType() {
		return accomodationType;
	}

	/**
	 * @param accomodationType the accomodationType to set
	 */
	public void setAccomodationType(AccomodationTypeEnum accomodationType) {
		this.accomodationType = accomodationType;
	}

	/**
	 * @return the address
	 */
	public String getAddress() {
		return address;
	}

	/**
	 * @param address the address to set
	 */
	public void setAddress(String address) {
		this.address = address;
	}

	/**
	 * @return the city
	 */
	public String getCity() {
		return city;
	}

	/**
	 * @param city the city to set
	 */
	public void setCity(String city) {
		this.city = city;
	}

	/**
	 * @return the dateOfBirth
	 */
	public Date getDateOfBirth() {
		return dateOfBirth;
	}

	/**
	 * @param dateOfBirth the dateOfBirth to set
	 */
	public void setDateOfBirth(Date dateOfBirth) {
		this.dateOfBirth = dateOfBirth;
	}

	/**
	 * @return the email
	 */
	public String getEmail() {
		return email;
	}

	/**
	 * @param email the email to set
	 */
	public void setEmail(String email) {
		this.email = email;
	}

	/**
	 * @return the firstName
	 */
	public String getFirstName() {
		return firstName;
	}

	/**
	 * @param firstName the firstName to set
	 */
	public void setFirstName(String firstName) {
		this.firstName = firstName;
	}

	/**
	 * @return the hasGarden
	 */
	public Boolean getHasGarden() {
		return hasGarden;
	}

	/**
	 * @param hasGarden the hasGarden to set
	 */
	public void setHasGarden(Boolean hasGarden) {
		this.hasGarden = hasGarden;
	}

	/**
	 * @return the hasVehicule
	 */
	public Boolean getHasVehicule() {
		return hasVehicule;
	}

	/**
	 * @param hasVehicule the hasVehicule to set
	 */
	public void setHasVehicule(Boolean hasVehicule) {
		this.hasVehicule = hasVehicule;
	}

	/**
	 * @return the lastName
	 */
	public String getLastName() {
		return lastName;
	}

	/**
	 * @param lastName the lastName to set
	 */
	public void setLastName(String lastName) {
		this.lastName = lastName;
	}

	/**
	 * @return the livingSpace
	 */
	public BigDecimal getLivingSpace() {
		return livingSpace;
	}

	/**
	 * @param livingSpace the livingSpace to set
	 */
	public void setLivingSpace(BigDecimal livingSpace) {
		this.livingSpace = livingSpace;
	}

	/**
	 * @return the password
	 */
	public String getPassword() {
		return password;
	}

	/**
	 * @param password the password to set
	 */
	public void setPassword(String password) {
		this.password = password;
	}

	/**
	 * @return the pays
	 */
	public String getPays() {
		return pays;
	}

	/**
	 * @param pays the pays to set
	 */
	public void setPays(String pays) {
		this.pays = pays;
	}

	/**
	 * @return the postalCode
	 */
	public String getPostalCode() {
		return postalCode;
	}

	/**
	 * @param postalCode the postalCode to set
	 */
	public void setPostalCode(String postalCode) {
		this.postalCode = postalCode;
	}

	/**
	 * @return the about
	 */
	public String getAbout() {
		return about;
	}

	/**
	 * @param about the about to set
	 */
	public void setAbout(String about) {
		this.about = about;
	}

	/**
	 * @return the role
	 */
	public RoleEnum getRole() {
		return role;
	}

	/**
	 * @param role the role to set
	 */
	public void setRole(RoleEnum role) {
		this.role = role;
	}

	/**
	 * @return the status
	 */
	public StatusEnum getStatus() {
		return status;
	}

	/**
	 * @param status the status to set
	 */
	public void setStatus(StatusEnum status) {
		this.status = status;
	}

	/**
	 * @return the telephone
	 */
	public String getTelephone() {
		return telephone;
	}

	/**
	 * @param telephone the telephone to set
	 */
	public void setTelephone(String telephone) {
		this.telephone = telephone;
	}

	/**
	 * @return the animals
	 */
	public List<Animal> getAnimals() {
		return animals;
	}

	/**
	 * @param animals the animals to set
	 */
	public void setAnimals(List<Animal> animals) {
		this.animals = animals;
	}

	/**
	 * @return the services
	 */
	public List<ServiceEntity> getServices() {
		return services;
	}

	/**
	 * @param services the services to set
	 */
	public void setServices(List<ServiceEntity> services) {
		this.services = services;
	}

	/**
	 * @return the serialversionuid
	 */
	public static long getSerialversionuid() {
		return serialVersionUID;
	}

	private static final long serialVersionUID = 1L;

	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	@Column(unique = true, nullable = false)
	private int id;


	@Column(name="accomodation_type")
	@Enumerated(EnumType.STRING)
	private AccomodationTypeEnum accomodationType;

	@Column(nullable = false, length = 200)
	private String address;

	@Column(nullable = false, length = 45)
	private String city;

	@Temporal(TemporalType.DATE)
	@Column(name = "date_of_birth")
	private Date dateOfBirth;

	@Column(nullable = false, length = 125)
	private String email;

	@Column(name = "first_name", nullable = false, length = 45)
	private String firstName;

	@Column(name = "has_garden")
	private Boolean hasGarden;

	@Column(name = "has_vehicule")
	private Boolean hasVehicule;

	@Column(name = "last_name", nullable = false, length = 45)
	private String lastName;

	@Column(name = "living_space", precision = 5, scale = 2)
	private BigDecimal livingSpace;

	@Column(nullable = false, length = 45)
	private String password;

	@Column(nullable = false, length = 45)
	private String pays;

	@Column(name = "postal_code", nullable = false, length = 10)
	private String postalCode;

	@Lob
	private String about;

	@Column(nullable=false)
	@Enumerated(EnumType.STRING)
	private RoleEnum role;

	@Enumerated(EnumType.STRING)
	private StatusEnum status;

	@Column(nullable = false, length = 45)
	private String telephone;

	// bi-directional many-to-one association to AnimalEntity
	@JsonIgnore

	@OneToMany(mappedBy = "user", fetch=FetchType.LAZY)
	private List<Animal> animals;

	// bi-directional many-to-one association to ServiceEntity
	@JsonIgnore
	@OneToMany(mappedBy = "user", fetch=FetchType.LAZY)
	private List<ServiceEntity> services;
}
