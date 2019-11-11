import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class TweetService {
  private url: string = 'http://localhost:3000/api/v1/tweets?q=%23liveperson';

  constructor(private http: HttpClient) { }

  getTweets() {
    return this.http.get(this.url);
  }
}
