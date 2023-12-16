import { AccomodationTypeEnum } from "./accomodation.enum";
import { RoleEnum } from "./role.enum";

export interface UserModel {
    id?: number;
    lastName?: string;
    firstName?: string;

    about?: string;
    dailyPrice?: number;
    image? : string;
    accomodationType?: AccomodationTypeEnum;
    address?: string;
    postalCode?: string;
    city?: string;
    pays?:string;
    livingSpace?:number;
    hasGaden?: boolean;
    hasVehicule ?: boolean;
    telephone?: string;
    email?: string;
    password?:string
    role ?: RoleEnum,
    dateOfBirth? : Date;
    status ?: 'AVAILABLE' | 'NOTAVAILABLE' | 'BANNED';

  }
