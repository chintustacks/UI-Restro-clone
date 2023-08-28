import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HomeRoutingModule } from './home-routing.module';
import { HomeLandingComponent } from './home-landing/home-landing.component';
import { MainLayoutModule } from 'src/app/layout/main-layout/main-layout.module';
import { UserModule } from 'src/app/component/user/user.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { Ng2SearchPipeModule } from 'ng2-search-filter';
import { ToastrModule } from 'ngx-toastr';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
@NgModule({
  declarations: [
    HomeLandingComponent
  ],
  imports: [
    CommonModule,
    HomeRoutingModule,
    UserModule,
    MainLayoutModule,
    FormsModule,
    ReactiveFormsModule,
    Ng2SearchPipeModule,
    BrowserAnimationsModule,
    ToastrModule.forRoot()
  ],
  exports:[
    HomeLandingComponent
    
  ]
})
export class HomeModule { }
