# AngularSocial
## Install, initialization and settings

1. <strong>Install dependency</strong>
[ngx-facebook-docs](https://zyra.github.io/ngx-facebook/)
```
  npm install ngx-facebook
```
1. <strong>Install module</strong>
```
  npm install ngx-auth-social
```
2. <strong>include scripts to index page</strong>
```
<script type="text/javascript" src="https://connect.facebook.net/en_US/sdk.js"></script>
<script src="https://apis.google.com/js/platform.js"></script>
```
3. <strong>Settings your environment.ts</strong>
```
socialAuth: {
    facebook: {
      appId: string,
      xfbml: boolean,
      version: string
    },
    linkedin: {
      initializationCallback: () => void;
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
4. <strong>Import AuthSocialModule into your app's root module</strong>
```
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

5. <strong>Inject SocialService and call the init methods (optional):
This method must be called in ngAfterViewInit and before using login methods.</strong>
```
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
      new LinkedinInitModel(environment.socialAuth.linkedin)
    );
  }
```

## Example Usage

```
@Component(...)
export class MyComponent {

  constructor(private socialService: SocialService) {}

}
```

```
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

```
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

```  
  googleLogin(el: HTMLElement) {
    this.socialService.googleAuth(el).subscribe(googleUser => {
      const profile = googleUser.getBasicProfile();
      console.log('Token || ' + googleUser.getAuthResponse().id_token);
      console.log('ID: ' + profile.getId());
      console.log('Name: ' + profile.getName());
      console.log('Image URL: ' + profile.getImageUrl());
      console.log('Email: ' + profile.getEmail());
    });
  }
```
