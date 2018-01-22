import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {MatButtonModule, MatCheckboxModule,MatToolbarModule,MatIconModule,MatSelectModule,MatSidenavModule} from '@angular/material';
import {MatInputModule} from '@angular/material';
import {MatCardModule} from '@angular/material/card';
// import {FormControl, Validators} from '@angular/forms';
import { FlexLayoutModule } from "@angular/flex-layout";

import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import { RouterModule,Route} from '@angular/router';
import {MatGridListModule} from '@angular/material/grid-list';
import {MatFormFieldModule} from '@angular/material';
import {MatMenuModule} from '@angular/material/menu';
import {MatDialogModule} from '@angular/material';
// import {MatTableDataSource, MatSort} from '@angular/material';
import {MatTableModule} from '@angular/material/table';
//components
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { AddTenentadminComponent } from './add-tenentadmin/add-tenentadmin.component';
import { TenentAdminDashboardComponent } from './tenent-admin-dashboard/tenent-admin-dashboard.component';
import { ListingPageComponent } from './listing-page/listing-page.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { DataService} from './data.service'

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    AddTenentadminComponent,
    TenentAdminDashboardComponent,
    ListingPageComponent,
    DashboardComponent,

  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    FormsModule,
    ReactiveFormsModule,
    MatButtonModule,
    MatCheckboxModule,
    MatToolbarModule,
    MatSidenavModule,
    MatIconModule,
    MatInputModule,
    MatCardModule,
    MatSelectModule,
    MatGridListModule,
    MatFormFieldModule,
    MatMenuModule,
    MatDialogModule,
    // MatTableDataSource,
    // MatSort,
    MatTableModule,
    // FormControl,
    // Validators,
    FlexLayoutModule,
    RouterModule.forRoot([
  // {path:"",component:AppComponent},
    {path:"Login",component:LoginComponent},
    {path:"AddTenentadmin",component:AddTenentadminComponent},
    {path:"TenentAdminDashboard",component:TenentAdminDashboardComponent},
    {path:"ListingPage",component:ListingPageComponent},
    {path:"Dashboard",component:DashboardComponent}

  ])
  ],
  providers: [DataService],
  bootstrap: [AppComponent]
})
export class AppModule { }
