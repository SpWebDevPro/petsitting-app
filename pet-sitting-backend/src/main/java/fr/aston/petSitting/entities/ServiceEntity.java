package fr.aston.petSitting.entities;

import java.io.Serializable;
import java.math.BigDecimal;
import java.util.List;

import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.EnumType;
import jakarta.persistence.Enumerated;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.JoinColumn;
import jakarta.persistence.Lob;
import jakarta.persistence.ManyToOne;
import jakarta.persistence.OneToMany;
import jakarta.persistence.Table;
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
@Table(name = "service")
public class ServiceEntity implements Serializable {

	private static final long serialVersionUID = 1L;

	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	@Column(unique = true, nullable = false)
	private int id;

	@Column(name = "daily_price", nullable = false, precision = 5, scale = 2)
	private BigDecimal dailyPrice;

	@Lob
	@Column(nullable = false)
	private String description;

	@Column(nullable = false, length = 125)
	private String name;


	@Column(nullable = false)
	@Enumerated(EnumType.STRING)
	
	private ServiceEnum type;

	// bi-directional many-to-one association to BookingEntity
	@OneToMany(mappedBy = "service")
	private List<Booking> bookings;

	// bi-directional many-to-one association to UserEntity
	@ManyToOne
	@JoinColumn(name = "user_id", nullable = false)
	private User user;
}
