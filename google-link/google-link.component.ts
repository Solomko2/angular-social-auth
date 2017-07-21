import {Component, Input, OnInit} from '@angular/core';
import {ITokenParams} from '../models/ITokenParams';
import {SocialService} from '../social.service';

@Component({
  selector: 'ngx-google-link',
  templateUrl: './google-link.component.html',
  styleUrls: ['./google-link.component.css']
})
export class GoogleLinkComponent implements OnInit {
  @Input() config: ITokenParams;

  constructor(private socialService: SocialService) { }

  ngOnInit() {
  }

  login() {
    if (this.config) {
      this.socialService.authLink('google', this.config);
    } else {
      console.warn('config empty');
    }
    return false;
  }

}
