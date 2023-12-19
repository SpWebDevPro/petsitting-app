package fr.aston.petSitting.modele;
import java.math.BigDecimal;
import java.util.Date;

import fr.aston.petSitting.entities.AnimalGenderEnum;
import fr.aston.petSitting.entities.AnimalTypeEnum;
import jakarta.persistence.EnumType;
import jakarta.persistence.Enumerated;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;


@Data
@NoArgsConstructor
@AllArgsConstructor
public class BookingModel {
	private int id;

	private BigDecimal totalPrice;
	private Date startDate;
	private Date endDate;
	private int animalId;
	private int serviceId;

}
