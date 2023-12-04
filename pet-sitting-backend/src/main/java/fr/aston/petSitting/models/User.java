package fr.aston.petSitting.models;

import java.io.Serializable;
import java.util.Date;
import java.util.List;

import jakarta.persistence.Column;
import jakarta.persistence.DiscriminatorColumn;
import jakarta.persistence.Entity;

import jakarta.persistence.FetchType;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.OneToMany;
import jakarta.persistence.Table;
import jakarta.persistence.Temporal;
import jakarta.persistence.TemporalType;
import jakarta.validation.constraints.NotBlank;
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
@Table(name = "USERS")
@DiscriminatorColumn(name = "ROLE")

public abstract class User implements Serializable {

	private static final long serialVersionUID = 1L;

	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	private Long id;
	/**
	 * 
	 */
	@NotBlank
	@Column(unique = true)
	private String email;
	private String pssword;

	@NotBlank
	private String firstName;
	private String lastName;
	private String telephon;
	private String photoUrl;
	@Temporal(TemporalType.DATE)
	private Date dateOfBirth;

	private String address;
	private String postCode;
	private String city;
	private boolean isAvailable;
	private Date startAvaialble;
	private Date endAvailable;
	private boolean isActivate;

	@OneToMany(mappedBy = "sitter")
	private List<Service> services;

	@OneToMany(mappedBy = "parent", fetch = FetchType.LAZY)
	private List<Animal> animaux;

}
