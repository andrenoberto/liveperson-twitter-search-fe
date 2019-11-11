import { Component, OnInit } from '@angular/core';

import { Tweet, SearchTweetsResponse } from 'src/app/shared/models';
import { TweetService } from 'src/app/core/http/tweet.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.sass'],
})
export class HomeComponent implements OnInit {
  nextResults: string;
  tweets: Tweet[] = [];

  constructor(private tweetService: TweetService) { }

  ngOnInit() {
    this.tweetService.searchTweets()
      .subscribe((response: SearchTweetsResponse) => {
        this.nextResults = response.searchMetadata.nextResults;
        this.tweets = response.tweets;
      });
  }

  reload() {
    const tweets = this.tweets;
    this.tweets = [];
    setTimeout(() => this.setTweets(tweets), 100);
  }

  setTweets(tweets) {
    this.tweets = tweets;
  }
}
