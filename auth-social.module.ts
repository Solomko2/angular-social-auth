import { NgModule } from '@angular/core';

import { CommonModule } from '@angular/common';
import { SocialService } from './social.service';
import { FacebookModule } from 'ngx-facebook';

@NgModule({
  imports: [CommonModule, FacebookModule.forRoot()],
  declarations: [],
  exports: [
    FacebookModule
  ],
  providers: [SocialService]
})
export class AuthSocialModule {}
