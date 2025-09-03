import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { AmplifyAuthenticatorModule } from '@aws-amplify/ui-angular';
import { fetchAuthSession, fetchUserAttributes } from 'aws-amplify/auth';

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
    const userAttr = await fetchUserAttributes();
    this.userName = userAttr.preferred_username;
    console.log(userAttr);
  }

  async whoIsSignedIn() {
    // const currentUser = await getCurrentUser();
    // console.log(currentUser);

    const userSession = await fetchAuthSession();
    console.log(userSession);
  }
}
