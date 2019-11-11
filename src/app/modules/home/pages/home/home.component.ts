import { Component, OnInit } from '@angular/core';
import { Tweet } from 'src/app/shared/models';
import { TweetService } from 'src/app/core/http/tweet.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.sass']
})
export class HomeComponent implements OnInit {
  tweets: Tweet[];

  constructor(private tweetService: TweetService) { }

  ngOnInit() {
    this.tweetService.getTweets()
      .subscribe(data => {
        this.tweets = data.tweets;
      });
  }
}
