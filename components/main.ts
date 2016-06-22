import {bootstrap}    from '@angular/platform-browser-dynamic';
import { APP_ROUTER_PROVIDERS } from './app.routes';
import { HTTP_PROVIDERS } from '@angular/http';
import {AppComponent} from './app.component';

bootstrap(AppComponent, [ APP_ROUTER_PROVIDERS, HTTP_PROVIDERS ]);
