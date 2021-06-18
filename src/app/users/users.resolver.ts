import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, Resolve, RouterStateSnapshot } from '@angular/router';

import { Observable } from 'rxjs';

import { UsersService } from './users.service';
import { User } from './user/user.model';

@Injectable({
	providedIn: 'root'
})
export class UsersResolver implements Resolve<User[]> {

	constructor(private usersService: UsersService) { }

	resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<User[]> | Promise<User[]> | User[] {
		return this.usersService.getUsers();
	}

}