import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {path:"",redirectTo:'/home/homepage', pathMatch:'full'},
  {path:"add",loadChildren:()=>import('src/app/add/add.module').then(m=>m.AddModule)},
  {path:"home",loadChildren:()=>import('src/app/home/home.module').then(m=>m.HomeModule)},
  {path:"details",loadChildren:()=>import('src/app/details/details.module').then(m=>m.DetailsModule)},
  {path:"edit",loadChildren:()=>import('src/app/edit/edit.module').then(m=>m.EditModule)},
  {path:"**",loadChildren:()=>import('src/app/not-found/not-found.module').then(m=>m.NotFoundModule)}


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
