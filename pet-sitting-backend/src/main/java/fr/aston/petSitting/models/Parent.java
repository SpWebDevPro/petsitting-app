package fr.aston.petSitting.models;

import java.io.Serializable;

import jakarta.persistence.DiscriminatorValue;
import jakarta.persistence.Entity;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.EqualsAndHashCode;
import lombok.ToString;

/**
 * @author F_CHAMAR
 *
 */
@Entity
@DiscriminatorValue("PARENT")
@Data
@AllArgsConstructor
@ToString
@EqualsAndHashCode(callSuper = true)
public class Parent extends User implements Serializable {

	private static final long serialVersionUID = 1L;

}
