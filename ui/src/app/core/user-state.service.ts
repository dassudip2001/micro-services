import { Injectable, signal } from '@angular/core';
import { KeycloakProfile } from 'keycloak-js';

@Injectable({
  providedIn: 'root'
})
export class UserStateService {
  private _profile = signal<KeycloakProfile>({} as KeycloakProfile);

  currentUser = this._profile; // This acts as a signal

  setCurrentUser(state: KeycloakProfile): void {
    this._profile.set(state);
  }

  getCurrentUser(): KeycloakProfile {
    return this._profile();
  }

  getUserNameById(id: string): string {
    return this._profile().id === id ? `${this._profile().firstName!} ${this._profile().lastName!}` : '';
  }
}
