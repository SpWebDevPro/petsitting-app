import { AccomodationTypeEnum } from './accomodation.enum';

export interface UserModel {
  id: number;
  lastName: string;
  firstName: string;

  about: string;
  dailyPrice: number;
  image?: string;
  accomodationType: AccomodationTypeEnum;
  address: string;
  postalCode: string;
  city: string;
  livingSpace: string;
  hasGaden: boolean;
  hasVehicule: boolean;
}
