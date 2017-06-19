import {DishType} from './dishtype.model';
export class Dish{
	id: number;
	picture: string;
	name: string;
	ingredients: string[];
	rank: number;
	type: DishType;
	isGlat: boolean;
	isVegan: boolean;
	isGlutenFree: boolean;
}