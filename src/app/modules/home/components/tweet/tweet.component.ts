import { Component, Input } from '@angular/core';
import { faTwitter } from '@fortawesome/free-brands-svg-icons';
import { Tweet } from 'src/app/shared/models';
import { trigger, style, state, transition, animate, keyframes, query, stagger } from '@angular/animations';

@Component({
  selector: 'app-tweet',
  templateUrl: './tweet.component.html',
  styleUrls: ['./tweet.component.sass'],
  animations: [
    trigger('fadeInOut', [
      state('void', style({
        opacity: 0
      })),
      transition('void => *', animate('.5s ease-in', keyframes([
        style({ opacity: 0, transform: 'translateY(-50%)', offset: 0 }),
        style({ opacity: .5, transform: 'translateY(-10px) scale(1.1)', offset: 0.3 }),
        style({ opacity: 1, transform: 'translateY(0)', offset: 1 }),
      ]))),
    ])
  ],
})
export class TweetComponent {
  faTwitter = faTwitter;

  @Input() tweet: Tweet;
}
