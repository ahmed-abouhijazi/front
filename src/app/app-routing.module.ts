import { RechargeFormComponent } from './components/recharge-form/recharge-form.component';
import { TransferComponent } from './components/transfer/transfer.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ClientProfileComponent } from './components/client-profile/client-profile.component';
import { HomeComponent } from './components/home/home.component';
import { LoginComponent } from './components/login/login.component';
import { AuthGuard } from './guards/auth.guard';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { AddBenefeciaryComponent } from './components/add-benefeciary/add-benefeciary.component';

import { WelcomePageComponent } from './components/welcome-page/welcome-page.component';


const routes: Routes = [
  {path:'login',component:LoginComponent},
  {path:'welcome',component:WelcomePageComponent},
  {path:'transfer',component:TransferComponent},
  {path:'',component:HomeComponent,canActivate:[AuthGuard]},
  {path:'dashboard',component:DashboardComponent},
  {path:'recharge',component:RechargeFormComponent},
  {path:'profile',component:ClientProfileComponent,canActivate:[AuthGuard]},
  {path:'addBenefeciary',component:AddBenefeciaryComponent,canActivate:[AuthGuard]}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
