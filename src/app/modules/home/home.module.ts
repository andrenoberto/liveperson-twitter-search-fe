import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';

import { HomeRoutingModule } from './home-routing.module';
import { HomeComponent } from './pages/home/home.component';
import { TweetComponent } from './components/tweet/tweet.component';
import { SocialButtonComponent } from './components/social-button/social-button.component';
import { SocialButtonsComponent } from './components/social-buttons/social-buttons.component';
import { RelativeDatePipe } from 'src/app/shared/pipes';

const components = [
  HomeComponent,
  SocialButtonsComponent,
  SocialButtonComponent,
  TweetComponent,
];

@NgModule({
  declarations: [
    ...components,
    RelativeDatePipe,
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
