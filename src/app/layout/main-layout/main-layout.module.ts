import { NgModule , CUSTOM_ELEMENTS_SCHEMA  } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './header/header.component';
import { SidebarComponent } from './sidebar/sidebar.component';
import { RouterModule } from '@angular/router';

@NgModule({
  exports: [
    HeaderComponent,
    SidebarComponent,
    RouterModule
   ],
  declarations: [
    HeaderComponent,
    SidebarComponent  
  ],
  imports: [
    CommonModule,
    RouterModule
  ],
  schemas: [
    CUSTOM_ELEMENTS_SCHEMA
  ]
})
export class MainLayoutModule { }
