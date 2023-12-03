package fr.aston.petSitting.models;

import java.io.Serializable;
import java.util.Date;

import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.ManyToOne;
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
public class Booking implements Serializable {

	private static final long serialVersionUID = 1L;

	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	private Long id;
	private Date startDate;
	private Date endDate;
	private Double amount;

	@ManyToOne
	private Service service;

	@ManyToOne
	private Animal animal;

}
