import { Injectable } from '@angular/core';

import { User } from './user/user.model';

@Injectable({
	providedIn: 'root'
})
export class UsersService {

	users: User[] = [
		{ id: 1, name: 'Pedro Picapiedra' },
		{ id: 2, name: 'Vilma Traka' },
		{ id: 3, name: 'Pablo Marmol' },
		{ id: 4, name: 'Betty Marmol' }
	];

	getUsers(): User[] {
		return this.users;
	}

}