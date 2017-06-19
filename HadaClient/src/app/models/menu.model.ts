import {Dish} from './dish.model';
export class Menu{
	id: number;
	date: Date;
	type: string;
	dishes: Dish[];
}