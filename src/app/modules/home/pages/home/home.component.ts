import { Component, OnInit, HostListener } from '@angular/core';
import { take } from 'rxjs/operators';

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

  static isEndOfPage(): boolean {
    return window.innerHeight + window.scrollY >= document.body.offsetHeight;
  }

  ngOnInit() {
    this.tweetService.searchTweets()
      .subscribe((response: SearchTweetsResponse) => {
        this.nextResults = response.searchMetadata.nextResults;
        this.tweets = response.tweets;
      });
  }

  @HostListener('window:scroll')
  loadNextResults() {
    if (HomeComponent.isEndOfPage() && this.nextResults) {
      this.tweetService.searchTweets(this.nextResults)
      .pipe(take(1))
        .subscribe((response: SearchTweetsResponse) => {
          this.nextResults = response.searchMetadata.nextResults;
          this.tweets = response.tweets;
        });
    }
  }

  trackById(index, item: Tweet): string {
    return item.id;
  }
}
