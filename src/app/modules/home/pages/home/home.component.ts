import { Component, OnInit, HostListener } from '@angular/core';

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

  @HostListener('window:scroll', ['$event'])
  doSomething(event) {
    console.log(event.target);
    console.log(event.target.offsetHeight, event.target.scrollTop, event.target.scrollHeight)
    if (event.target.offsetHeight + event.target.scrollTop >= event.target.scrollHeight) {
      console.log("End");
    }

    if (false) {
      console.log('Fim da página')
      this.tweetService.searchTweets(this.nextResults)
        .subscribe((response: SearchTweetsResponse) => {
          this.nextResults = response.searchMetadata.nextResults;
          this.tweets = response.tweets;
        });
    }
  }
}
