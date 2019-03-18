import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { RouterModule, Routes } from '@angular/router';

import { DashboardComponent } from './dashboard.component';

import { HomeComponent } from './home/home.component';


/*const appRoutes: Routes = [
  { path: 'dashboard', component: HomeComponent },
    redirectTo: 'dashboard',
    pathMatch: 'full'
  },

];*/

@NgModule({
  declarations: [
    DashboardComponent,
    HomeComponent,
  ],
  imports: [
    RouterModule,
    BrowserModule,
    FormsModule,
    HttpModule
],
exports: [
    DashboardComponent
  ]
  // providers: [],
  // bootstrap: [DashboardComponent]
})
export class DashboardModule { }
