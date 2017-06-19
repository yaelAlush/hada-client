import {DoseType} from './dosetype.model';
export class Dose{
	id: number;
	picture: string;
	name: string;
	description: string;
	rank: number;
	type: DoseType;
	isGlat: boolean;
	isVegan: boolean;
	isGlutenFree: boolean;
}