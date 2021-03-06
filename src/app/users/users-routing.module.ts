import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { UsersResolver } from './users.resolver';

import { UsersComponent } from './users.component';
import { UserComponent } from './user/user.component';

const routes: Routes = [
	{ path: '', component: UsersComponent, resolve: { users: UsersResolver }, children: [
		{ path: ':id', component: UserComponent }
	] }
];

@NgModule({
	imports: [RouterModule.forChild(routes)],
	exports: [RouterModule]
})
export class UsersRoutingModule { }