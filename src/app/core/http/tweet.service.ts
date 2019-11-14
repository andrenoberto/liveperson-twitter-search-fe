import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { SearchTweetsResponse } from 'src/app/shared/models';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class TweetService {
  private url = 'http://localhost:3000/api/v1/tweets';

  constructor(private http: HttpClient) { }

  searchTweets(queryString: string = '?q=%23liveperson'): Observable<SearchTweetsResponse> {
    return this.http.get(`${this.url}${queryString}`);
  }
}
