package fr.aston.petSitting.entities;

public enum ServiceEnum {
	WALK, VISIT, HOSTING, INVALID;
	
	 public static ServiceEnum getEnum(String s){
	        if(WALK.name().equals(s)){
	            return WALK;
	        }else if(VISIT.name().equals(s)){
	            return VISIT;
	        }else if(HOSTING.name().equals(s)){
	            return HOSTING;
	        }
	       return null;
	    }
}

