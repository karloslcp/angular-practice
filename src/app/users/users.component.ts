import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Data } from '@angular/router';

import { User } from './user/user.model';

@Component({
	selector: 'app-users',
	templateUrl: './users.component.html'
})
export class UsersComponent {

	users: User[];

	constructor(private route: ActivatedRoute) { }

	ngOnInit() {
		this.route.data.subscribe((data: Data) => this.users = data['users']);
	}

}