import { AuthService } from '@app/services';
import { Injectable } from '@angular/core';
import { Router,CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';


@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {
  constructor(
    private router: Router,
    private authenticationService: AuthService
) { }

canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot) {
  const currentUser = this.authenticationService.currentUserValue;
  if (currentUser) {

    if(route.data.teacher && !currentUser.is_teacher){
      this.router.navigate(['/']);
      return false;
    }
      // logged in so return true
      return true;
  }

  // not logged in so redirect to login page with the return url
  this.router.navigate(['/login'], { queryParams: { returnUrl: state.url } });
  return false;
}

}
