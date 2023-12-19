import { AnimalTypeEnum } from "./animalType.enum";
import { GenderEnum } from "./genderAnimal.enum";
import { UserModel } from "./user.model";

export interface AnimalModel {
  id: number;
  type: AnimalTypeEnum;
  gender: GenderEnum;
  weight: number;
  dateOfBirth: Date;
  isVaccinated:boolean;
  isSterilized:boolean;
  petName:string;
  breed:string;
  isSocial:boolean;
  petPhoto:string;
  userId:number;
  user?:UserModel;
  selected: boolean;
}
