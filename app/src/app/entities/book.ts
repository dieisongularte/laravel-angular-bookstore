import { Entity } from './entity';

export interface Book extends Entity {
  name: string;
  price: number;
  quantity: number;
  category: string;
  img: string;
}
