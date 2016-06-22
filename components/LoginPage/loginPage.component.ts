import { Component } from '@angular/core';
import { LoginPageService } from './loginPage.service';

@Component({
  templateUrl: 'public/themes/default/html/loginPage.html',
  styleUrls: [ 'public/themes/default/css/global.css' ],
  providers: [ LoginPageService ]
})

export class LoginPageComponent {
  constructor(private service: LoginPageService) {}
}
