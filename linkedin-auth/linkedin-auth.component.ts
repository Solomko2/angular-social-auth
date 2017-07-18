import {Component, OnInit} from '@angular/core';
import {SocialService} from '../social.service';

@Component({
  selector: 'app-linkedin-auth',
  templateUrl: './linkedin-auth.component.html',
  styleUrls: ['./linkedin-auth.component.css']
})
export class LinkedinAuthComponent implements OnInit {

  constructor(private socialService: SocialService) {
  }

  ngOnInit() {

  }

  loginLI() {
    this.socialService
      .linkedinAuth('id,firstName,lastName,emailAddress,num-connections,picture-url')
      .subscribe(res => console.log(res), err => console.log(err))
  }

}
