import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdminLoginComponent } from './admin-login/admin-login.component';
import { AdminUpdateComponent } from './admin-update/admin-update.component';
import { CandidatesTableComponent } from './candidates-table/candidates-table.component';
import { ForgetemailComponent } from './forgetemail/forgetemail.component';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { RegistrationComponent } from './user/registration/registration.component';

const routes: Routes = [
  {path:'',component:HomeComponent},
  {path:'home12',component:HomeComponent},
  
  {path:'login',component:LoginComponent},
  {path:'forgetemailid',component:ForgetemailComponent},
  {path:'candidate',component:CandidatesTableComponent},
  {path:'add',component:AdminLoginComponent},
  {path:'update',component:AdminUpdateComponent},
  {path: 'registration', component: RegistrationComponent},
  { path: 'user', loadChildren: () => import('./user/user.module').then(m => m.UserModule) },
 
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

