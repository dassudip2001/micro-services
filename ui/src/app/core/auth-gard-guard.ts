import { inject } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivateFn, RouterStateSnapshot, UrlTree } from '@angular/router';
import { AuthGuardData, createAuthGuard } from 'keycloak-angular';
import { UserStateService } from './user-state.service';

const isAccessAllowed = async (
  route: ActivatedRouteSnapshot,
  state: RouterStateSnapshot,
  authData: AuthGuardData
): Promise<boolean | UrlTree> => {
  const _uss = inject(UserStateService);
  const { authenticated, grantedRoles, keycloak } = authData;

  if (!authenticated)
    await keycloak.login({
      redirectUri: window.location.origin + state.url
    });
  else _uss.setCurrentUser(await keycloak.loadUserProfile());

  // Get the roles required from the route.
  const requiredRoles = route.data['roles'];
  // Allow the user to proceed if no additional roles are required to access the route.
  if (!Array.isArray(requiredRoles) || requiredRoles.length === 0) return true;

  const hasRequiredRole = (role: string): boolean =>
    Object.values(grantedRoles.resourceRoles).some((roles) => roles.includes(role));

  // return true if any role matches
  return requiredRoles.some(hasRequiredRole) || false;
};

export const canActivateAuth = createAuthGuard<CanActivateFn>(isAccessAllowed);
