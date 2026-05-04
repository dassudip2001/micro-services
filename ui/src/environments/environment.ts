export const environment = {
   production: true,
  apiUrl: 'https://api.yourdomain.com',
  keycloak: {
    url: 'https://auth.yourdomain.com',
    realm: 'microservices',
    clientId: 'angular-client',
    redirectUri: 'https://yourdomain.com',
    silentCheckSsoRedirectUri: 'https://yourdomain.com/assets/silent-check-sso.html',
  }
};
