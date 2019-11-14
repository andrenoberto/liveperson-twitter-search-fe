import {getTestBed, TestBed} from '@angular/core/testing';
import {HttpClientTestingModule, HttpTestingController} from '@angular/common/http/testing';

import {TweetService} from './tweet.service';
import {SearchTweetsResponse} from '../../shared/models';

describe('TweetService', () => {
  let injector: TestBed;
  let service: TweetService;
  let httpMock: HttpTestingController;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      providers: [TweetService],
    });
    injector = getTestBed();
    service = injector.get(TweetService);
    httpMock = injector.get(HttpTestingController);
  });

  afterEach(() => {
    httpMock.verify();
  });

  it('should be created', () => {
    const tweetService: TweetService = TestBed.get(TweetService);
    expect(tweetService).toBeTruthy();
  });

  it('should return an Observable of SearchTweetsResponse', () => {
    const queryString = '?q=%23liveperson';
    const response: SearchTweetsResponse = {
      searchMetadata: {
        count: 0,
      },
      tweets: []
    };

    service.searchTweets(queryString).subscribe((res: SearchTweetsResponse) => {
      expect(res).toEqual(response);
    });

    const req = httpMock.expectOne(`http://localhost:3000/api/v1/tweets${queryString}`);
    expect(req.request.method).toBe('GET');
    req.flush(response);
  });
});
