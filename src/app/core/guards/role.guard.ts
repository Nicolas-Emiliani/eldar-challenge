// import { Injectable } from '@angular/core';
// import { CanActivate, ActivatedRouteSnapshot, Router, CanActivateFn } from '@angular/router';
// import { AuthService } from '../services/auth.service';

// @Injectable({
//   providedIn: 'root'
// })
// export class RoleGuard {

//   constructor(private authService: AuthService, private router: Router) {}

//   canActivate: CanActivateFn = (route: ActivatedRouteSnapshot): boolean => {
//     const expectedRole = route.data['role'];
//     const currentRole = this.authService.getUserRole();

//     if (currentRole === expectedRole) {
//       return true;
//     } else {
//       this.router.navigate(['/']);
//       return false;
//     }
//   }
// }