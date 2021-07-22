const oktaAuthConfig = {
  // Note: If your app is configured to use the Implicit flow
  // instead of the Authorization Code with Proof of Code Key Exchange (PKCE)
  // you will need to add `pkce: false`
  issuer: 'https://dev-69915542.okta.com/oauth2/default',
  clientId: '{0oa19c5i75UVszLOU5d7}',
  redirectUri: window.location.origin + '/login/',
};

const oktaSignInConfig = {
  baseUrl: 'https://dev-69915542.okta.com',
  clientId: '{0oa19c5i75UVszLOU5d7}',
  redirectUri: 'https://www.prayiprayer.com',
  authParams: {
    responseType: "id_token",
    responseMode: "fragment",
    scope: [
        'openid',
        'email',
        'profile',
        'address',
        'phone',
        'groups',
    ],
    // If your app is configured to use the Implicit flow
    // instead of the Authorization Code with Proof of Code Key Exchange (PKCE)
    // you will need to uncomment the below line
  },
  idpDisplay: 'PRIMARY',
  idps: [{
    'type': 'GOOGLE',
    'id': '0oa19c79c0MDkDCKq5d7'
  }]
  // Additional documentation on config options can be found at https://github.com/okta/okta-signin-widget#basic-config-options
};

export { oktaAuthConfig, oktaSignInConfig };