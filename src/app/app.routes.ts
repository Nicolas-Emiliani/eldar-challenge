import { Routes } from '@angular/router';
import { LoginComponent } from './components/auth/login/login.component';
import { AuthGuard } from './core/guards/auth.guard';

const dashboardRoute = {
  path: 'dashboard',
  loadComponent: () =>
    import('./components/dashboard/data-posts/data-posts.component').then(m => m.DataPostsComponent),
  canActivate: [AuthGuard],
  data: { role: 'user', title: 'Dashboard' },
};

export const routes: Routes = [
  {
    path: '',
    component: LoginComponent,
  },
  dashboardRoute,
];

export default routes;
