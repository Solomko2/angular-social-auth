import {Component, Input, OnInit} from '@angular/core';
import {SocialService} from '../social.service';
import {ITokenParams} from '../models/ITokenParams';

@Component({
  selector: 'ngx-linkedin-link',
  templateUrl: './linkedin-link.component.html',
  styleUrls: ['./linkedin-link.component.css']
})
export class LinkedinLinkComponent implements OnInit {
  @Input() config: ITokenParams;

  constructor(private socialService: SocialService) { }

  ngOnInit() {
  }

  login() {
    if (this.config) {
      this.socialService.authLink('linkedin', this.config);
    } else {
      console.warn('config empty');
    }
    return false;
  }

}
