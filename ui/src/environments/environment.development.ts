export const environment = {
  production: false,
  apiUrl: 'http://localhost:8080',
  keycloak: {
    url: 'http://localhost:8080',
    realm: 'microservices',
    clientId: 'angular-client',
    redirectUri: 'http://localhost:4200',
    silentCheckSsoRedirectUri: 'http://localhost:4200/assets/silent-check-sso.html',
  }
};
