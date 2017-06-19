import {DishType} from './dishtype.model';
export class Dish{
	id: number;
	picture: string;
	name: string;
	description: string;
  rank: number;
  total: number;
  likedCount: number;
	type: DishType;
	isGlat: boolean;
	isVegan: boolean;
	isGlutenFree: boolean;
	emoji: string;
}
