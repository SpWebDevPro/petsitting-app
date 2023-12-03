package fr.aston.petSitting.models;

import java.io.Serializable;
import java.util.List;

import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.ManyToOne;
import jakarta.persistence.OneToMany;
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
public class Service implements Serializable {

	/**
	 * 
	 */
	private static final long serialVersionUID = 1L;

	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	private Long id;

	private Double dailyPrice;
	private TypeService typeService;
	@NotBlank
	private String name;
	private String description;

	@OneToMany(mappedBy = "service")
	private List<Booking> bookings;

	@ManyToOne
	private Sitter sitter;
}
