import {MenuType} from './menutype.model';
import {Dose} from './dose.model';
export class Menu{
	id: number;
	date: Date;
	type: MenuType;
	dishes: Dose[];
}