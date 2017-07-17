import { Component, OnInit } from '@angular/core';
import {
  AuthResponse, FacebookService, InitParams, LoginOptions,
  LoginResponse
} from 'ngx-facebook';
import {environment} from '../../../environments/environment';

@Component({
  selector: 'app-facebook-auth',
  templateUrl: './facebook-auth.component.html',
  styleUrls: ['./facebook-auth.component.css']
})
export class FacebookAuthComponent implements OnInit {

  constructor(private fb: FacebookService) {
    const envFacebook = environment.socialAuth.facebook;

    const initParams: InitParams = {
      appId: envFacebook.appId,
      xfbml: envFacebook.xfbml,
      version: envFacebook.version
    };

    fb.init(initParams);
  }

  ngOnInit() {
  }

  loginWithFacebook(): void {
    const loginOptions: LoginOptions = {
      scope: 'public_profile,user_friends,email,pages_show_list',
      return_scopes: true,
      enable_profile_selector: true
    };
    this.fb.login(loginOptions)
      .then((res: LoginResponse) => {
        console.log('LoginResponse', res);
      })
      .catch(console.error.bind(console));

  }

  /**
   * Get the user's profile
   */
  getProfile() {
    this.fb.api('/me')
      .then((res: any) => {
        console.log('Got the users profile', res);
      })
      .catch(console.error.bind(console));
  }

  getLoginStatus() {
    this.fb.getLoginStatus()
      .then(console.log.bind(console))
      .catch(console.error.bind(console));
  }

}
