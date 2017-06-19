import { DishType } from './dishtype.model';
export class Dish {
	id: number;
	picture: string;
	name: string;
	ingredients: string[];
	rank: number;
	description: string;
	total: number;
	likedCount: number;
	type: DishType;
	isGlat: boolean;
	isVegan: boolean;
	isGlutenFree: boolean;
	emoji: string;
}
