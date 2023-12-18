package fr.aston.petSitting.modele;

import java.math.BigDecimal;

import fr.aston.petSitting.entities.ServiceEnum;
import fr.aston.petSitting.entities.User;


public class ServiceModele {

	private int id;
	private BigDecimal dailyPrice;
	private String description;
	private String name;
	private ServiceEnum type;
	private Integer userId;
	private User user;
  public ServiceModele getType;

	/**
	 * @return the user
	 */
	public User getUser() {
		return user;
	}

	/**
	 * @param user the user to set
	 */
	public void setUser(User user) {
		this.user = user;
	}

	public Boolean hasUserId() {
		if (this.getUserId() != null) {
			return true;
		}
		return false;
	}

	public int getId() {
		return this.id;
	}

	public void setId(int id) {
		this.id = id;
	}

	public BigDecimal getDailyPrice() {
		return this.dailyPrice;
	}

	public void setDailyPrice(BigDecimal dailyPrice) {
		this.dailyPrice = dailyPrice;
	}

	public String getDescription() {
		return this.description;
	}

	public void setDescription(String description) {
		this.description = description;
	}

	public String getName() {
		return this.name;
	}

	public void setName(String name) {
		this.name = name;
	}

	public ServiceEnum getType() {
		return this.type;
	}

	public void setType(ServiceEnum type) {
		this.type = type;
	}

	public Integer getUserId() {
		return this.userId;
	}

	public void setUserId(Integer userId) {
		this.userId = userId;
	}

}
