# Angular Social Auth, (Google, Linkedin, Facebook)
## Install, initialization and settings

### Install module
``npm install ngx-auth-social``

### Install dependency
[ngx-facebook-docs](https://zyra.github.io/ngx-facebook/)
``npm install ngx-facebook``

### include scripts to index page
```html
  <script src="https://connect.facebook.net/en_US/sdk.js"></script>
  <script src="https://apis.google.com/js/platform.js"></script>
```

### Set up your environment.ts
```javascript
socialAuth: {
    facebook: {
      appId: string,
      xfbml: boolean,
      version: string
    },
    linkedin: {
      apiKey: string;
      authorize?: boolean;
      isServer?: boolean;
    },
    google: {
      client_id: string,
      cookiepolicy: string,
      scope: string
    }
  }
```

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

### Inject SocialService and call the init methods (optional): This method must be called in ngAfterViewInit and before using login methods.</strong>
```javascript
import { SocialService } from "ngx-auth-social";

constructor(private socialService: SocialService) {}

  ngAfterViewInit() {
    //init google
    this.socialService.googleInit(
      new GoogleInitModel(environment.socialAuth.google)
    );

    //init facebook
    this.socialService.facebookInit(
      new FacebookInitModel(environment.socialAuth.facebook)
    );

    //init linkedin
    this.socialService.linkedinInit(
      new LinkedinInitModel(environment.socialAuth.linkedin),
      () => console.log('linkedin init')
    );
  }
```

## Example Usage

```javascript
@Component(...)
export class MyComponent {

  constructor(private socialService: SocialService) {}

}
```

```javascript
  linkedinLogin() {
    this.socialService
      .linkedinAuth(
        'id,firstName,lastName,emailAddress,num-connections,picture-url'
      )
      .subscribe(
        res => console.log(res),
        err => console.log(err)
      )
  }
```

```javascript
  facebookLogin() {
    const loginOptions: LoginOptions = {
      scope: 'public_profile,user_friends,email,pages_show_list',
      return_scopes: true,
      enable_profile_selector: true
    };
    this.socialService.facebookAuth(loginOptions)
        .subscribe(
          res => console.log(res),
          err => console.log(err)
        );
  }
```

```javascript
  googleLogin() {
    this.socialService.googleAuth().subscribe(googleUser => {
      const profile = googleUser.getBasicProfile();
      console.log('Token || ' + googleUser.getAuthResponse().id_token);
      console.log('ID: ' + profile.getId());
      console.log('Name: ' + profile.getName());
      console.log('Image URL: ' + profile.getImageUrl());
      console.log('Email: ' + profile.getEmail());
    });
  }
```
