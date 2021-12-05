import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CreatePostComponent } from './create-post/create-post.component';
import { HomePostComponent } from './home-post/home-post.component';
import { HomeUpdateComponent } from './home-update/home-update.component';

const routes: Routes = [
  {path:"", redirectTo: "home",pathMatch:"full"},
  {path: 'home', component:HomePostComponent},
  {path:'create-post',component:CreatePostComponent},
  {path:'update-post/:id',component:HomeUpdateComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
