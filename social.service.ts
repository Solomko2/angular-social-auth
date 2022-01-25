import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Subject, Observable } from 'rxjs';
import { distinctUntilChanged } from 'rxjs/operators';
import { ITokenParams } from './models/ITokenParams';


class TokenParams {
  code: any;
  clientId: any;
  redirectURI: any;
  authEndpoint: any;

  constructor(source: ITokenParams, code: any) {
    this.code = code;
    this.clientId = source.clientId;
    this.redirectURI = source.redirectURI;
    this.authEndpoint = source.authEndpoint;
  }
}

@Injectable()
export class SocialService {
  private code: string;

  private socialSubject = new Subject();
  public socialEventToken = this.socialSubject.asObservable()
    .pipe(distinctUntilChanged());

  public authLink(provider: string, config: any): void {

    localStorage.setItem('authConfig', JSON.stringify(config));
    localStorage.setItem('provider', provider);

    if (provider === 'linkedin') {
      window.location.href = 'https://www.linkedin.com/oauth/v2/authorization?client_id=' +
        config.clientId + '&redirect_uri=' +
        config.redirectURI + '&response_type=code';
    }
    if (provider === 'facebook') {
      window.location.href = 'https://www.facebook.com/v2.8/dialog/oauth?client_id=' +
        config.clientId + '&redirect_uri=' +
        config.redirectURI + '&scope=email';
    }
    if (provider === 'google') {
      window.location.href = 'https://accounts.google.com/o/oauth2/v2/auth?response_type=code&client_id=' +
        config.clientId + '&redirect_uri=' +
        config.redirectURI + '&scope=email%20profile';
    }
  }

  constructor(
    private route: ActivatedRoute,
    private _http: HttpClient
  ) {
    this.route.queryParams.subscribe(({ code }) => {
      this.code = code;
      const config = JSON.parse(localStorage.getItem('authConfig'));
      const provider = localStorage.getItem('provider');
      /**
       * if code not empty send config to backend and emit response
       */
      if (this.code) {
        this.sendCodeToServer(new TokenParams(config, this.code)).subscribe(res => {
            this.socialSubject.next({provider: provider, payload: res});
          },
          err => console.warn(err)
        );
      }
    });

  }

  sendCodeToServer(params: TokenParams): Observable<any> {
    return this._http.post(params.authEndpoint, params);
  }
}
