import { Component, OnInit } from '@angular/core';
import { faTwitter } from '@fortawesome/free-brands-svg-icons';

@Component({
  selector: 'app-tweet',
  templateUrl: './tweet.component.html',
  styleUrls: ['./tweet.component.sass']
})
export class TweetComponent implements OnInit {
  faTwitter = faTwitter;

  constructor() { }

  ngOnInit() {
  }

}
