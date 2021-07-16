import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';
import {FontAwesomeModule} from '@fortawesome/angular-fontawesome';
import {HttpClientTestingModule} from '@angular/common/http/testing';
import {Observable, of} from 'rxjs';

import {HomeComponent} from './home.component';
import {SocialButtonComponent} from '../../components/social-button/social-button.component';
import {SocialButtonsComponent} from '../../components/social-buttons/social-buttons.component';
import {TweetComponent} from '../../components/tweet/tweet.component';
import {RelativeDatePipe} from '../../../../shared/pipes';
import {SearchTweetsResponse, Tweet} from '../../../../shared/models';
import {TweetService} from '../../../../core/http/tweet.service';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {LoaderComponent} from '../../components/loader/loader.component';

const searchTweetsResponse = {
  searchMetadata: {
    count: 1,
  },
  tweets: [{id: '123456', createdAt: new Date().toDateString()}]
};

class MockTweetService extends TweetService {
  searchTweets(queryString: string = '?q=%23liveperson'): Observable<SearchTweetsResponse> {
    return of(searchTweetsResponse);
  }
}

describe('HomeComponent', () => {
  let component: HomeComponent;
  let fixture: ComponentFixture<HomeComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      imports: [
        FontAwesomeModule,
        HttpClientTestingModule,
        BrowserAnimationsModule,
      ],
      declarations: [
        HomeComponent,
        LoaderComponent,
        SocialButtonComponent,
        SocialButtonsComponent,
        TweetComponent,
        RelativeDatePipe,
      ],
      providers: [
        {provide: TweetService, useClass: MockTweetService},
      ],
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HomeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should return the id of a tweet', () => {
    const tweet: Tweet = {id: '123456'};

    const id = component.trackById(null, tweet);

    expect(id).toBe(tweet.id);
  });

  it('should not look up for new tweets if there is no next results', () => {
    const tweetService: MockTweetService = fixture.debugElement.injector.get(TweetService) as MockTweetService;
    const searchTweetsSpy = spyOn(tweetService, 'searchTweets');

    component.nextResults = '';
    component.loadNextResults();

    expect(searchTweetsSpy).not.toHaveBeenCalled();
  });

  it('should look up for new tweets', () => {
    spyOn(HomeComponent, 'isEndOfPage').and.callFake(() => true);

    component.nextResults = '?q=%23liveperson';
    component.loadNextResults();

    expect(component.tweets).toEqual(searchTweetsResponse.tweets);
  });
});
