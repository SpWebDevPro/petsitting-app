import { ServiceEnum } from "./serviceType.enum";
import { UserModel } from "./user.model";

export interface ServiceModel {
    id: number;
    name: string;
    description: string;
    dailyPrice: number;
    type: 'walk' | 'visit' | 'hosting';
    userID: number;
    user ?: UserModel;
 
  }