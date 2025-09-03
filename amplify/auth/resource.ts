import { defineAuth, secret } from '@aws-amplify/backend';

/**
 * Define and configure your auth resource
 * @see https://docs.amplify.aws/gen2/build-a-backend/auth
 */
export const auth = defineAuth({
  loginWith: {
    email: true,
    externalProviders: {
      google: {
        clientId: secret('GOOGLE_CLIENT_ID'),
        clientSecret: secret('GOOGLE_CLIENT_SECRET'),
        scopes: ['profile', 'email'],
        attributeMapping: {
          email: 'email',
          preferredUsername: 'name',
        },
      },
      callbackUrls: ['http://localhost:4200', 'https://yourwebsite.com'],
      logoutUrls: ['http://localhost:4200', 'https://yourwebsite.com'],
    },
  },
  groups: ['Testers', 'Admins', 'Editors', 'Customers'],
  multifactor: {
    mode: 'REQUIRED',
    totp: true,
  },
  userAttributes: {
    'custom:job_title': {
      dataType: 'String',
      minLen: 2,
      maxLen: 50,
      mutable: true,
    },
    'custom:companyName': {
      dataType: 'String',
      minLen: 2,
      maxLen: 50,
      mutable: true,
    },
    preferredUsername: {
      mutable: true,
      required: true,
    },
    birthdate: {
      mutable: true,
      required: true,
    },
  },
});
