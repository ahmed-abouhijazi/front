import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './components/login/login.component';
import { HomeComponent } from './components/home/home.component';
import { ClientNavbarComponent } from './components/partials/client-navbar/client-navbar.component';

import { TransferComponent } from './components/transfer/transfer.component';

import { AccountsComponent } from './components/accounts/accounts.component';
import { ClientAgentComponent } from './components/client-agent/client-agent.component';
import { ClientProfileComponent } from './components/client-profile/client-profile.component';


import { NotificationComponent } from './components/notification/notification.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { TransferFormComponent } from './components/transfer-form/transfer-form.component';
import { TransferHistoryComponent } from './components/transfer-history/transfer-history.component';
import { RechargeFormComponent } from './components/recharge-form/recharge-form.component';
import { RechargesComponent } from './components/recharges/recharges.component';
@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    HomeComponent,
    ClientNavbarComponent,

    TransferComponent,
    NotificationComponent,
    DashboardComponent,
    TransferFormComponent,
    TransferHistoryComponent,

    AccountsComponent,
    ClientAgentComponent,
    ClientProfileComponent,
    RechargeFormComponent,
    RechargesComponent

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    
    ReactiveFormsModule
    
  ],
  providers: [ ],
  bootstrap: [AppComponent]
})
export class AppModule { }
