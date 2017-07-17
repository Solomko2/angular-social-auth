import { Injectable, NgZone } from '@angular/core';
import {environment} from '../../../environments/environment';

@Injectable()
export class LinkedinService {

  constructor(private zone: NgZone) {
    this.insertLinkedInScriptElement(
      () => {console.log('insert linkedin script')},
      environment.socialAuth.linkedin.apiKey,
      environment.socialAuth.linkedin.authorize
    );
  }

  public insertLinkedInScriptElement(initializationCallback: () => void, apiKey: string, authorize?: boolean, isServer?: boolean) {
    if (isServer !== true) {
      this._initializeLibrary(initializationCallback);
      this._writeToDOM(apiKey, authorize);
    }
  }

  private _initializeLibrary(initializationCallback: () => void) {
    window['linkedInStateChangeRef'] = () => {
      this.zone.run(() => {
        if (initializationCallback) {
          initializationCallback();
        }
      });
    };
  }

  private _writeToDOM(apiKey: string, authorize: boolean) {
    const linkedInScriptElement = window.document.createElement('script');
    linkedInScriptElement.type = 'text/javascript';
    const linkedInAPISrc = '//platform.linkedin.com/in.js';
    linkedInScriptElement.src = linkedInAPISrc;
    const linkedInAPIKey = `\napi_key: ${apiKey}`;
    const linkedInAPIOnLoad = `\nonLoad: window.linkedInStateChangeRef`;
    const linkedInAPIAuthorize = `\nauthorize: ${authorize}\n`;
    const linkedInAPICfg = linkedInAPIKey + linkedInAPIOnLoad + linkedInAPIAuthorize;
    linkedInScriptElement.innerHTML = linkedInAPICfg;
    window.document.head.appendChild(linkedInScriptElement);
  }

}
