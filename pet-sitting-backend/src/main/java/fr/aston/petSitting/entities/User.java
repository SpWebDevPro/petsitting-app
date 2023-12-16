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
@Data

@NoArgsConstructor
@AllArgsConstructor
@Table(name = "user")

public class User implements Serializable {
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
	private List<AnimalEntity> animalEntities;

	// bi-directional many-to-one association to ServiceEntity
	@JsonIgnore
	@OneToMany(mappedBy = "user", fetch=FetchType.LAZY)
	private List<ServiceEntity> services;
}
