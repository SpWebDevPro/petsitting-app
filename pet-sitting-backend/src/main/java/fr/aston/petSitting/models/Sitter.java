package fr.aston.petSitting.models;

import java.io.Serializable;

import jakarta.persistence.DiscriminatorValue;
import jakarta.persistence.Entity;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.EqualsAndHashCode;
import lombok.NoArgsConstructor;
import lombok.ToString;

/**
 * @author F_CHAMAR
 *
 */
@Entity
@Data
@AllArgsConstructor
@NoArgsConstructor
@ToString
@EqualsAndHashCode(callSuper = true)
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
