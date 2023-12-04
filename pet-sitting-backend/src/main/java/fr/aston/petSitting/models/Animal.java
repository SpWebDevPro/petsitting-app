package fr.aston.petSitting.models;

import java.io.Serializable;
import java.util.Date;
import java.util.List;

import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
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
@Table(name = "ANIMALS")
public class Animal implements Serializable {

	private static final long serialVersionUID = 1L;

	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	private Long id;
	private String petName;
	private String gender;
	private String weight;
	@Temporal(TemporalType.DATE)
	private Date dateOfBirth;
	private boolean isVaccinated;
	private boolean isSterilized;
	private String urlPhoto;
	private boolean isSocial;
	private TypeAnimal type;
	private String breed;

	@ManyToOne
	private User parent;

	@OneToMany(mappedBy = "animal")
	private List<Booking> bookings;
}
