import {AfterViewInit, Component, OnInit} from '@angular/core';
import {environment} from '../../../environments/environment';
declare const gapi: any;

@Component({
  selector: 'app-google-auth',
  templateUrl: './google-auth.component.html',
  styleUrls: ['./google-auth.component.css']
})
export class GoogleAuthComponent implements OnInit, AfterViewInit {
  public auth2: any;
  public googleInit() {
    const that = this;
    gapi.load('auth2', function () {
      that.auth2 = gapi.auth2.init({
        client_id: environment.socialAuth.google.client_id,
        cookiepolicy: environment.socialAuth.google.cookiepolicy,
        scope: environment.socialAuth.google.scope
      });
      that.attachSignin(document.getElementById('googleBtn'));
    });
  }

  public attachSignin(element) {
    const that = this;
    this.auth2.attachClickHandler(element, {},
      function (googleUser) {

        const profile = googleUser.getBasicProfile();
        console.log('Token || ' + googleUser.getAuthResponse().id_token);
        console.log('ID: ' + profile.getId());
        console.log('Name: ' + profile.getName());
        console.log('Image URL: ' + profile.getImageUrl());
        console.log('Email: ' + profile.getEmail());
        //YOUR CODE HERE
      }, function (error) {
        alert(JSON.stringify(error, undefined, 2));
      });
  }

  constructor() { }

  ngOnInit() {
  }

  ngAfterViewInit() {
    this.googleInit();
  }

}
