import {Injectable, NgZone} from '@angular/core';
import {Observable} from 'rxjs/Observable';
import 'rxjs/add/observable/of';
import {FacebookService, InitParams, LoginOptions, LoginResponse} from 'ngx-facebook';
import {GoogleInitModel, LinkedinInitModel} from './models';

declare const gapi: any;
declare const IN: any;

@Injectable()
export class SocialService {
  public auth2: any;

  constructor(
    private zone: NgZone,
    private fb: FacebookService
  ) {}

  /**
   * LINKEDIN INIT
   */
  linkedinInit(initParams: LinkedinInitModel) {
    this.insertLinkedInScriptElement(initParams);
  }

  /**
   * FACEBOOK INIT
   * @param initParams
   */
  facebookInit(initParams: InitParams) {
    this.fb.init(initParams);
  }

  /**
   * GOOGLE INIT
   */
  public googleInit(initParams: GoogleInitModel) {
    gapi.load('auth2', () => {
      this.auth2 = gapi.auth2.init(initParams);
    });
  }

  /**
   * GOOGLE SIGN-IN
   * @param element
   */
  public googleAuth(element: HTMLElement): Observable<any> {
    return Observable.create(observer => {
      this.auth2.attachClickHandler(element, {},
        (googleUser) => {
          observer.next(googleUser);
          observer.complete();
        }, (error) => {
          observer.next(error);
          observer.complete();
        });
    });
  }

  /**
   * LINKEDIN SIGN-IN
   */
  public linkedinAuth(scope: string): Observable<any> {
    return Observable.create(observer => {
      IN.User.authorize(() => {
        IN.API.Raw(`/people/~:(${scope})?format=json`)
          .method('GET')
          .result((res) => {
            observer.next(res);
            observer.complete();
          }).error((err) => {
          observer.next(err);
          observer.complete();
        });
      }, this);
    });
  }

  /**
   * FACEBOOK SIGN-IN
   */
  facebookAuth(loginOptions?: LoginOptions): Observable<any> {
    return Observable.create(observer => {
      this.fb.login(loginOptions)
        .then((res: LoginResponse) => {
          observer.next(res);
          observer.complete();
        }, err => {
          observer.next(err);
          observer.complete();
        })
    });

  }

  /**
   * INSERT LINKEDIN SCRIPT TO PAGE
   * @param param: LinkedinInitModel
   */
  public insertLinkedInScriptElement(param: LinkedinInitModel) {
    if (param.isServer !== true) {
      this._initializeLibrary(param.initializationCallback);
      this._writeToDOM(param.apiKey, param.authorize);
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
