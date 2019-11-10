import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { TweetComponent } from './tweet/tweet.component';


const routes: Routes = [
  { path: '', component: TweetComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
