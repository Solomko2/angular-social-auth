import { Component, OnInit } from '@angular/core';
import {SocialService} from '../social.service';
import {LoginOptions} from 'ngx-facebook';

@Component({
  selector: 'app-facebook-auth',
  templateUrl: './facebook-auth.component.html',
  styleUrls: ['./facebook-auth.component.css']
})
export class FacebookAuthComponent implements OnInit {

  constructor(private socialService: SocialService) {}

  ngOnInit() {
  }

  login() {
    const loginOptions: LoginOptions = {
      scope: 'public_profile,user_friends,email,pages_show_list',
      return_scopes: true,
      enable_profile_selector: true
    };
    this.socialService.facebookAuth(loginOptions).subscribe(res => console.log(res), err => console.log(err));
  }

}
