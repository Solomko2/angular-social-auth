import {Component, OnInit} from '@angular/core';
import {SocialService} from '../social.service';

@Component({
  selector: 'app-google-auth',
  templateUrl: './google-auth.component.html',
  styleUrls: ['./google-auth.component.css']
})
export class GoogleAuthComponent implements OnInit {

  constructor(private socialService: SocialService) { }


  ngOnInit() {
  }

  googleLogin(el: HTMLElement) {
    this.socialService.googleAuth(el).subscribe(googleUser => {
      const profile = googleUser.getBasicProfile();
      console.log('Token || ' + googleUser.getAuthResponse().id_token);
      console.log('ID: ' + profile.getId());
      console.log('Name: ' + profile.getName());
      console.log('Image URL: ' + profile.getImageUrl());
      console.log('Email: ' + profile.getEmail());
    });
  }

}
