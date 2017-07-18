import { NgModule } from '@angular/core';

import { CommonModule } from '@angular/common';
import { SocialService } from './social.service';
import { FacebookModule } from 'ngx-facebook';

import {
  FacebookAuthComponent,
  GoogleAuthComponent,
  LinkedinAuthComponent
} from './index';

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
  providers: [SocialService]
})
export class AuthSocialModule {}
