import {NgModule} from '@angular/core';
import {SocialService} from './social.service';
import {HttpClientModule} from '@angular/common/http';
import {RouterModule} from '@angular/router';
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
