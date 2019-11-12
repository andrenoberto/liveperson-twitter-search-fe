import { Component, Input, HostListener } from '@angular/core';
import { faTwitter } from '@fortawesome/free-brands-svg-icons';

import { fadeIn } from 'src/app/shared/animations';
import { ITweet } from 'src/app/shared/models';

@Component({
  selector: 'app-tweet',
  templateUrl: './tweet.component.html',
  styleUrls: ['./tweet.component.sass'],
  animations: [fadeIn],
})
export class TweetComponent {
  faTwitter = faTwitter;

  @Input() tweet: ITweet;

  @HostListener('click')
  onClick() {
    console.log('Clicou no tweet', this.tweet.id);
 }
}
