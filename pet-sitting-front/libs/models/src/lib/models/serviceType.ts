export interface Service {
  id: string;
  type: 'walk' | 'visit' | 'hosting';
  dailyPrice: number;
  name: string;
  description: string;
  userId: string;
}
