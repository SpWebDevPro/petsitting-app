package fr.aston.petSitting.entities;

import java.io.Serializable;
import java.math.BigDecimal;
import java.util.Date;
import java.util.List;

import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.EnumType;
import jakarta.persistence.Enumerated;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.JoinColumn;
import jakarta.persistence.ManyToOne;
import jakarta.persistence.OneToMany;
import jakarta.persistence.Table;
import jakarta.persistence.Temporal;
import jakarta.persistence.TemporalType;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@Entity
@Data
@NoArgsConstructor
@AllArgsConstructor
@Table(name = "animal")
public class Animal implements Serializable {

	private static final long serialVersionUID = 1L;

	@Id
	@GeneratedValue(strategy=GenerationType.IDENTITY)
	@Column(unique=true, nullable=false)
	private int id;

	@Column(length=45)
	private String breed;

	@Temporal(TemporalType.DATE)
	@Column(name="date_of_birth")
	private Date dateOfBirth;

	@Column(name="is_social", nullable=false)
	private Boolean isSocial;
	

	@Column(name="is_sterilized", nullable=false)
	private Boolean isSterilized;

	@Column(name="is_vaccinated", nullable=false)
	private Boolean isVaccinated;

	@Column(name="pet_name", nullable=false, length=45)
	private String petName;

	@Column(name="pet_photo", length=200)
	private String petPhoto;

	@Column(nullable=false)
	@Enumerated(EnumType.STRING)

	private GenderEnum gender;

	@Column(nullable=false, precision=5, scale=2)
	private BigDecimal weight;

	//bi-directional many-to-one association to UserEntity
	@ManyToOne
	@JoinColumn(name="user_id", nullable=false)
	private User user;

	//bi-directional many-to-one association to BookingEntity
	@OneToMany(mappedBy="animal")
	private List<Booking> bookings;
	
	@Column(nullable=false)
	@Enumerated(EnumType.STRING)
	private AnimalTypeEnum type;


}
