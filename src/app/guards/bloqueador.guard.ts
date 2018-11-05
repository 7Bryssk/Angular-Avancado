import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, CanDeactivate, CanLoad } from '@angular/router';
import { Route } from '@angular/compiler/src/core';

import { Observable } from 'rxjs';
import { AppComponent } from '../app.component';


@Injectable({
  providedIn: 'root'
})
export class BloqueadorGuard implements CanActivate, CanDeactivate<AppComponent>, CanLoad {
  canActivate(
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): boolean {

    return true;
  }

  canDeactivate(
    component: AppComponent,
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ): boolean {

    return true;
  }

  canLoad(
    route: Route
  ): boolean {

    return true;
  }
}
