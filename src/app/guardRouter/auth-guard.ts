import { Injectable, inject } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { UtilsService } from '../services/utils.service';

@Injectable({
    providedIn: 'root'
  })
  export class AuthGuard implements CanActivate {

    utilsService = inject(UtilsService);

    canActivate(
        route: ActivatedRouteSnapshot,
        state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
    
      
        const user = this.utilsService.getFromLocalStorage('user');

        //esta online true
        if (user) {
          this.utilsService.routerLink('/home')
          return false;
        }
        else {
          return true;
        }
    
      }
  }