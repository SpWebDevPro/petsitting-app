package fr.aston.petSitting.models;

import java.io.Serializable;

import jakarta.persistence.DiscriminatorValue;
import jakarta.persistence.Entity;
import lombok.AllArgsConstructor;
import lombok.Data;

/**
 * @author F_CHAMAR
 *
 */
@Entity
@DiscriminatorValue("PARENT")
@Data
@AllArgsConstructor
public class Parent extends User implements Serializable {

	private static final long serialVersionUID = 1L;

}
