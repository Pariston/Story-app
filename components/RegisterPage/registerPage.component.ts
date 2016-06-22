import { Component } from '@angular/core';
import { RegisterPageService } from './registerPage.service';

@Component({
  templateUrl: 'public/themes/default/html/registerPage.html',
  styleUrls: [ 'public/themes/default/css/global.css' ],
  providers: [ RegisterPageService ]
})

export class RegisterPageComponent {
  constructor(private service: RegisterPageService) {}
}
