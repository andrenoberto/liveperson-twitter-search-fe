import { Component, Input } from '@angular/core';
import { faTwitter } from '@fortawesome/free-brands-svg-icons';
import { Tweet } from 'src/app/shared/models';

@Component({
  selector: 'app-tweet',
  templateUrl: './tweet.component.html',
  styleUrls: ['./tweet.component.sass']
})
export class TweetComponent {
  faTwitter = faTwitter;

  @Input() tweet: Tweet;
}
