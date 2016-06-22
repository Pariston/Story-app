import { RouterConfig, provideRouter } from '@angular/router';
import { HomePageComponent }                                        from './HomePage/homePage.component';
import { StoriesPageComponent }                                     from './StoriesPage/storiesPage.component';
import { UsersPageComponent }          from './UsersPage/usersPage.component';
import { RankingPageComponent }        from './RankingPage/rankingPage.component';
import { FavouritesPageComponent }     from './FavouritesPage/favouritesPage.component';
import { LoginPageComponent }          from './LoginPage/loginPage.component';
import { RegisterPageComponent}        from './RegisterPage/registerPage.component';
import { SearchPageComponent }         from './SearchPage/searchPage.component';

export const routes: RouterConfig = [
  { path: '', redirectTo: '/homepage', terminal: true },
  { path: 'homepage', component: HomePageComponent },
  { path: 'stories', component: StoriesPageComponent },
  { path: 'users', component: UsersPageComponent },
  { path: 'ranking', component: RankingPageComponent },
  { path: 'favourites', component: FavouritesPageComponent },
  { path: 'login', component: LoginPageComponent },
  { path: 'register', component: RegisterPageComponent },
  { path: 'search/:phrase', component: SearchPageComponent }
];

export const APP_ROUTER_PROVIDERS = [
  provideRouter(routes)
];
