import { Routes, RouterModule } from '@angular/router';
import {HomeComponent} from "./app/home/home.component";
import {LoginComponent} from "./app/login/login.component";
import {RegistrationComponent} from "./app/registration/registration.component";


const routes: Routes = [
  { path: '', component: HomeComponent,},
  { path: 'login', component: LoginComponent },
  { path: 'register', component: RegistrationComponent },
  { path: '**', redirectTo: '' }
];

export const appRoutingModule = RouterModule.forRoot(routes);
