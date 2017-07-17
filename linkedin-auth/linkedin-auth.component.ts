import { Component, OnInit } from '@angular/core';
import {LinkedinService} from './linkedin.service';
declare const IN;

@Component({
  selector: 'app-linkedin-auth',
  templateUrl: './linkedin-auth.component.html',
  styleUrls: ['./linkedin-auth.component.css']
})
export class LinkedinAuthComponent implements OnInit {

  constructor(private linkedinService: LinkedinService) { }

  ngOnInit() {

  }

  loginLD() {
    IN.User.authorize(() => {
      IN.API.Raw('/people/~:(id,firstName,lastName,emailAddress)?format=json')
        .method('GET').result((res) => {
        console.log(res);
      });
    }, this);
  }

  public getApiKeyFromSdkIN() {
    return IN.ENV.auth.anonymous_token;
  }

}
