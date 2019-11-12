import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';

import { HomeRoutingModule } from './home-routing.module';
import { HomeComponent } from './pages/home/home.component';
import { TweetComponent } from './components/tweet/tweet.component';
import { SocialButtonComponent } from './components/social-button/social-button.component';

const components = [
  HomeComponent,
  SocialButtonComponent,
  TweetComponent,
]

@NgModule({
  declarations: [
    ...components,
  ],
  imports: [
    CommonModule,
    HomeRoutingModule,
    FontAwesomeModule,
  ],
  entryComponents: [
    ...components,
  ],
})
export class HomeModule { }
