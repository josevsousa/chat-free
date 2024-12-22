import { Injectable, inject } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { UtilsService } from '../services/utils.service';

@Injectable({
    providedIn: 'root'
  })
  export class NoAuthGuard implements CanActivate {

    utilsService = inject(UtilsService);

    canActivate(
        route: ActivatedRouteSnapshot,
        state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
    
      
        const user = this.utilsService.getFromLocalStorage('user');
    
     //esta online true
     if (user) {
        return true;
      }
      else {
        this.utilsService.routerLink('/');
        return false;
      }
    
      }
  }