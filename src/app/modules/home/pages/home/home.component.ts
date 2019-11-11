import { Component, OnInit } from '@angular/core';
import { Tweet } from 'src/app/shared/models';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.sass']
})
export class HomeComponent implements OnInit {
  tweets: Tweet[] = [
    {
      text: "$LPSN's 10-day Moving Average crossed above its 50-day Moving Average on October 17, 2019. View odds for this and o… https://t.co/5trOv30Yjv",
      created_at: "Wed Nov 06 18:33:22 +0000 2019",
      user: {
        id: 374729426,
        name: "Tickeron",
        screen_name: "Tickeron",
        profile_banner_url: "https://pbs.twimg.com/profile_banners/374729426/1558729167",
        profile_image_url_https: "https://pbs.twimg.com/profile_images/881978009279881216/7fnZZ_Pl_normal.jpg"
      },
    },
    {
      text: "LivePerson, Inc.: Unusual volume for LivePerson, Inc. stock. #LivePerson #MarketScreener https://t.co/tYBO1lVNeW https://t.co/HOqtf1ag34",
      created_at: "Wed Nov 06 14:54:12 +0000 2019",
      user: {
        id: 1649782484,
        name: "MarketScreener Technical Alerts",
        screen_name: "MrktScreener_TA",
        profile_banner_url: "https://pbs.twimg.com/profile_banners/1649782484/1550586829",
        profile_image_url_https: "https://pbs.twimg.com/profile_images/1097867154677030913/IbcUfKJs_normal.png"
      },
    },
  ];

  constructor() { }

  ngOnInit() {
  }

}
