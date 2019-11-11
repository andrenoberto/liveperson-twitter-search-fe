import { Component, Input } from '@angular/core';
import { faTwitter } from '@fortawesome/free-brands-svg-icons';

import { fadeIn } from 'src/app/shared/animations';
import { Tweet } from 'src/app/shared/models';

@Component({
  selector: 'app-tweet',
  templateUrl: './tweet.component.html',
  styleUrls: ['./tweet.component.sass'],
  animations: [fadeIn],
})
export class TweetComponent {
  faTwitter = faTwitter;

  @Input() tweet: Tweet;
}
