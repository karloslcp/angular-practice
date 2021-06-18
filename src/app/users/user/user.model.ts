import { Address } from '../../address/address.model';

export interface User {
	id: number;
	name: string;
	address?: Address;
}