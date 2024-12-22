import { Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { LoginComponent } from './pages/login/login.component';
import { AuthGuard } from './guardRouter/auth-guard';
import { NoAuthGuard } from './guardRouter/no-auth-guard';


export const routes: Routes = [
    { 
        path: '', 
        redirectTo: 'login', 
        pathMatch: 'full' },
    { path: 'home', component: HomeComponent, canActivate: [NoAuthGuard] },
    { path: 'login', component: LoginComponent, canActivate: [AuthGuard] },
    { 
        path: '**',
        redirectTo: 'login',
        pathMatch: 'full'
     }
];
