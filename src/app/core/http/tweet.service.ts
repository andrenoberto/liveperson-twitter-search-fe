import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {SearchTweetsResponse} from 'src/app/shared/models';
import {Observable} from 'rxjs';
import {environment} from '../../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class TweetService {
  constructor(private http: HttpClient) {
  }

  searchTweets(queryString: string = '?q=%23liveperson'): Observable<SearchTweetsResponse> {
    return this.http.get(`${environment.apiUrl}/tweets${queryString}`);
  }
}
