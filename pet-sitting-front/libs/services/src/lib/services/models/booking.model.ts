import { BookingStatuEnum } from "./statusBooking.enum";

export interface BookingModel {
  id?: number;
  startDate?: Date;
  endDate?: Date;
  totalPrice?:number;
  animalId?:number;
  serviceId?:number;
  status:BookingStatuEnum;
}
