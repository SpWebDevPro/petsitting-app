import { ServiceTypeEnum } from './serviceType.enum';
import { UserModel } from './user.model';

/* export interface ServiceModel {
  id?: number;
  name: string;
  description: string;
  dailyPrice: number;
  type: ServiceTypeEnum;
  userId: number;
  user?: UserModel;
} */

export type ServiceModel = {
  id?: number;
  name: string;
  description: string;
  dailyPrice: number;
  type: ServiceTypeEnum;
  userId: number;
  user?: UserModel;
};
