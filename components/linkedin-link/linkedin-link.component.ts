import {Component, Input, OnInit} from '@angular/core';
import {ITokenParams} from '../../models/ITokenParams';
import {SocialService} from '../../social.service';

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
