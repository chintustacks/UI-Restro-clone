import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeLandingComponent } from './view/home/home-landing/home-landing.component';
const routes: Routes = [
  {
    path: "",
    component:HomeLandingComponent,
    data: {title: "", },
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
