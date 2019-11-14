import {async, ComponentFixture, TestBed} from '@angular/core/testing';
import {FontAwesomeModule} from '@fortawesome/angular-fontawesome';
import {HttpClientTestingModule} from '@angular/common/http/testing';

import {HomeComponent} from './home.component';
import {SocialButtonComponent} from '../../components/social-button/social-button.component';
import {SocialButtonsComponent} from '../../components/social-buttons/social-buttons.component';
import {TweetComponent} from '../../components/tweet/tweet.component';
import {RelativeDatePipe} from '../../../../shared/pipes';
import {Tweet} from '../../../../shared/models';

describe('HomeComponent', () => {
  let component: HomeComponent;
  let fixture: ComponentFixture<HomeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [
        FontAwesomeModule,
        HttpClientTestingModule,
      ],
      declarations: [
        HomeComponent,
        SocialButtonComponent,
        SocialButtonsComponent,
        TweetComponent,
        RelativeDatePipe,
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
});
