import { AnimalTypeEnum } from "./animalType.enum";
import { GenderEnum } from "./genderAnimal.enum";

export interface AnimalModel {
  id: number;
  type: AnimalTypeEnum;
  gender: GenderEnum;
  weight: number;
  date_of_birth: Date;
  is_vaccinated:boolean;
  is_sterilized:boolean;
  pet_name:string;
  breed:string;
  is_social:boolean;
  pet_photo:string;
  user_id:number;
}
