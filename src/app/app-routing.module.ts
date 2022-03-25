import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import {UserDetailsComponent} from "./user-details/user-details.component";
import {HomeComponent} from "./home/home.component";
import {UserPostsComponent} from "./user-posts/user-posts.component";

const routes: Routes = [
  {
    path: '',
    component: HomeComponent
  },
  {
    path: 'user-details/:id',
    component: UserDetailsComponent,
  },
  {
    path: 'user-posts/:userId',
    component: UserPostsComponent,
  },


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
