import { inject } from '@angular/core';
import { CanActivateFn, Router } from '@angular/router';
import { map } from 'rxjs/operators';
import { LoginService } from './services/login.service';

export const authGuard: CanActivateFn = (route, state) => {
  const loginService = inject(LoginService);
  const router = inject(Router);

  return loginService.isUserLogin().pipe(
    map(isLogged => {
      const isLoginRoute = route.routeConfig?.path === 'login';

      if (isLoginRoute && isLogged) {
        router.navigate(['/home']);
        return false; // No permitir el acceso a la página de login
      }

      if (!isLogged && !isLoginRoute) {
        router.navigate(['/login']);
        return false; // No permitir el acceso a la ruta protegida
      }

      return true; // Permitir el acceso a la ruta
    })
  );
};
