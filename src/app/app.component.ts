import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { AmplifyAuthenticatorModule } from '@aws-amplify/ui-angular';
import { fetchAuthSession, fetchUserAttributes } from 'aws-amplify/auth';
import {
  CookieStorage,
  defaultStorage,
  sessionStorage,
} from 'aws-amplify/utils';
import { cognitoUserPoolsTokenProvider } from 'aws-amplify/auth/cognito';

@Component({
  selector: 'app-root',
  imports: [AmplifyAuthenticatorModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent {
  title = 'amplifyge2-authui';
  userName: string | undefined = '';

  async ngOnInit() {
    //cognitoUserPoolsTokenProvider.setKeyValueStorage(new CookieStorage());

    const userAttr = await fetchUserAttributes();
    this.userName = userAttr.preferred_username;
    console.log(userAttr);

    // console.log(defaultStorage);
    // cognitoUserPoolsTokenProvider.setKeyValueStorage(defaultStorage);
  }

  async whoIsSignedIn() {
    // const currentUser = await getCurrentUser();
    // console.log(currentUser);

    const userSession = await fetchAuthSession();
    console.log(userSession);
  }
}
