import { NgModule } from '@angular/core';
import {HttpModule} from '@angular/http';
import { SocialService } from './social.service';

import {
  FacebookLinkComponent,
  GoogleLinkComponent,
  LinkedinLinkComponent
} from './index';


@NgModule({
  imports: [
    HttpModule
  ],
  declarations: [
    FacebookLinkComponent,
    GoogleLinkComponent,
    LinkedinLinkComponent
  ],
  exports: [
    FacebookLinkComponent,
    GoogleLinkComponent,
    LinkedinLinkComponent
  ],
  providers: [SocialService]
})
export class AuthSocialModule {}
