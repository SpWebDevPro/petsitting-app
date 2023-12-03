package fr.aston.petSitting.models;

import java.io.Serializable;

import jakarta.persistence.DiscriminatorValue;
import jakarta.persistence.Entity;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

/**
 * @author F_CHAMAR
 *
 */
@Entity
@Data
@AllArgsConstructor
@NoArgsConstructor
@DiscriminatorValue("SITTER")
public class Sitter extends User implements Serializable {

	private static final long serialVersionUID = 1L;
	// presentation
	private String about;
	private String accomodationType;
	private boolean hasVehicule;
	private boolean hasGarden;
	private double livingSpace;
}
