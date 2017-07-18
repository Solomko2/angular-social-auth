import {InitParams} from 'ngx-facebook';

export class FacebookInitModel implements InitParams {
  appId: string;
  xfbml: boolean;
  version: string;

  constructor(source: InitParams) {
    this.appId = source.appId;
    this.xfbml = source.xfbml;
    this.version = source.version;
  }
}
