import {Component, Input, OnInit} from '@angular/core';
import {ITokenParams} from '../../models/ITokenParams';
import {SocialService} from '../../social.service';

@Component({
  selector: 'ngx-facebook-link',
  templateUrl: './facebook-link.component.html',
  styleUrls: ['./facebook-link.component.css']
})
export class FacebookLinkComponent implements OnInit {
  @Input() config: ITokenParams;

  constructor(private socialService: SocialService) { }

  ngOnInit() {
  }

  login() {
    if (this.config) {
      this.socialService.authLink('facebook', this.config);
    } else {
      console.warn('config empty');
    }
    return false;
  }

}
