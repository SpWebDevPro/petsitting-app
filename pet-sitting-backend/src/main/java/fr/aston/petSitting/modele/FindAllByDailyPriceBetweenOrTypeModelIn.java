package fr.aston.petSitting.modele;

import fr.aston.petSitting.entities.ServiceEnum;

/**
 * Objet qui arrive sur le controlleur
 */
public class FindAllByDailyPriceBetweenOrTypeModelIn {
	private Float dailyPriceMin;
	private Float dailyPriceMax;
	private ServiceEnum type;
	
	public Float getDailyPriceMin() {
		return dailyPriceMin;
	}
	public void setDailyPriceMin(Float dailyPriceMin) {
		this.dailyPriceMin = dailyPriceMin;
	}
	public Float getDailyPriceMax() {
		return dailyPriceMax;
	}
	public void setDailyPriceMax(Float aylyPriceMax) {
		this.dailyPriceMax = aylyPriceMax;
	}
	public ServiceEnum getType() {
		return type;
	}
	public void setType(ServiceEnum type) {
		this.type = type;
	}


}
