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
      text: '$LPSN\'s 10-day Moving Average crossed above its 50-day Moving Average on October 17, 2019. View odds for this and other indicators: https://tickeron.com/go/904880 #LivePerson #stockmarket #stock #technicalanalysis #money #trading #investing #daytrading #news #today',
      createdAt: '25 min',
      user: {
        name: 'Andre Noberto',
        screen_name: 'andrenoberto',
        profile_image_url_https: 'https://scontent.fcpq1-1.fna.fbcdn.net/v/t1.0-9/40023140_1843052485778344_6664516077646512128_n.jpg?_nc_cat=101&_nc_oc=AQnOkDmOa4iU0c0Sv6SEyonkfygEmOBl_jp0OCZE46cmoZdgx_MGERbblgSRvVmb8j8&_nc_ht=scontent.fcpq1-1.fna&oh=eced08002d941719f5731b263934bd1f&oe=5E526A44',
      },
    },
    {
      text: '$LPSN\'s 10-day Moving Average crossed above its 50-day Moving Average on October 17, 2019. View odds for this and other indicators: https://tickeron.com/go/904880 #LivePerson #stockmarket #stock #technicalanalysis #money #trading #investing #daytrading #news #today',
      createdAt: '25 min',
      user: {
        name: 'Andre Noberto',
        screen_name: 'andrenoberto',
        profile_image_url_https: 'https://scontent.fcpq1-1.fna.fbcdn.net/v/t1.0-9/40023140_1843052485778344_6664516077646512128_n.jpg?_nc_cat=101&_nc_oc=AQnOkDmOa4iU0c0Sv6SEyonkfygEmOBl_jp0OCZE46cmoZdgx_MGERbblgSRvVmb8j8&_nc_ht=scontent.fcpq1-1.fna&oh=eced08002d941719f5731b263934bd1f&oe=5E526A44',
      },
    },
  ];

  constructor() { }

  ngOnInit() {
  }

}
