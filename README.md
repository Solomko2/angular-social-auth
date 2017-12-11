# Angular Social Auth, (Google, Linkedin, Facebook)
## Install, initialization and settings

### Install module
``npm install ngx-auth-social``

### Import AuthSocialModule into your app's root module
```javascript
  import { AuthSocialModule } from 'ngx-auth-social';

  @NgModule({
    ...
    imports: [
      AuthSocialModule
    ],
    ...
  })
  export class AppModule { }
```

### Set up your environment.ts
```typescript
  socialAuth: {
      facebook: {
        authEndpoint: 'http://example/server-route',
        clientId: '111111111111',
        redirectURI: 'http://example/facebook'
      },
      linkedin: {
        authEndpoint: 'http://example/server-route',
        clientId: '111111111111',
        redirectURI: 'http://example/linkedin'
      },
      google: {
        authEndpoint: 'http://example/server-route',
        clientId: '111111111111',
        redirectURI: 'http://example/google'
      }
    }
```
- **redirectURI** - url to which the user with the parameter '?code' will be redirected
- **authEndpoint** - server rout, to which parameters will be sent to get auth 
token (POST request)

  **As a result, the server has all the necessary parameters to authenticate and 
  return token or user data**

## Example Usage

```javascript
  import { 
    FacebookLinkComponent,
    GoogleLinkComponent,
    LinkedinLinkComponent,
    SocialService
  } from 'ngx-auth-social';

  @Component({
    selector: 'your-component',
    templateUrl: 'your.component.html'
  })
  
  export class YourComponent implements OnInit {
    public facebookConfig = environment.socialAuth.facebook;
    public googleConfig = environment.socialAuth.google;
    public linkedInConfig = environment.socialAuth.linkedin;
    
    constructor(private _socialService: SocialService) {}
    
    ngOnInit() {
      // subscribe to server response result
      this._socialService.socialEventToken.subscribe(
        ({provider, payload}) => {
          switch(provider) {
              case 'google':
                  // CODE BLOCK
                  break;
              case 'facebook':
                  // CODE BLOCK
                  break;
              case 'linkedin':
                  // CODE BLOCK
                  break;    
              default:
                  // CODE BLOCK
          }
        }, err => console.log(err))
    }
  }
```

## Component Code
```html
  <div class="container">
    <ngx-google-link [config]="googleConfig">google login</ngx-google-link>
    <ngx-facebook-link [config]="facebookConfig">facebook login</ngx-facebook-link>
    <ngx-linkedin-link [config]="linkedInConfig">linkedin login</ngx-linkedin-link>
  </div>
```


## Style
```scss
  .nxg-social {}
  .nxg-social__link {}
  .nxg-social__link--google {}
  .nxg-social__link--facebook {}
  .nxg-social__link--linkedin {}
```

#Attention !!!
**Don't use "hash URL" style. Redirect URLs cannot contain fragment identifiers (#)
 !!!**
