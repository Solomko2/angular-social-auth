import { NgModule } from '@angular/core';

import { CommonModule } from '@angular/common';
import { SocialService } from './social.service';
import { FacebookModule } from 'ngx-facebook';

import {
  FacebookAuthComponent,
  GoogleAuthComponent,
  LinkedinAuthComponent
} from './index';
import { LinkedinService } from './linkedin-auth/linkedin.service';

@NgModule({
  imports: [CommonModule, FacebookModule.forRoot()],
  declarations: [
    FacebookAuthComponent,
    LinkedinAuthComponent,
    GoogleAuthComponent
  ],
  exports: [
    FacebookModule,
    FacebookAuthComponent,
    LinkedinAuthComponent,
    GoogleAuthComponent
  ],
  providers: [SocialService, LinkedinService]
})
export class AuthSocialModule {}
