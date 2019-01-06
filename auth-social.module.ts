import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { SocialService } from './social.service';

import * as fromComponents from './components';

@NgModule({
  imports: [
    RouterModule.forRoot([]),
    HttpClientModule
  ],
  declarations: [
    ...fromComponents.components
  ],
  exports: [
    ...fromComponents.components
  ],
  providers: [SocialService]
})
export class AuthSocialModule {
}
