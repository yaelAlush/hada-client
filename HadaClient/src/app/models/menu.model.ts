import {MenuType} from './menutype.model';
import {Dish} from './dish.model';
export class Menu{
	id: number;
	date: Date;
	type: MenuType;
	dishes: Dish[];
}