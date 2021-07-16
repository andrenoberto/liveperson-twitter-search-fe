import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';
import {FontAwesomeModule} from '@fortawesome/angular-fontawesome';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';

import {TweetComponent} from './tweet.component';
import {RelativeDatePipe} from '../../../../shared/pipes';
import {Tweet} from '../../../../shared/models';

describe('TweetComponent', () => {
  let component: TweetComponent;
  let fixture: ComponentFixture<TweetComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      imports: [
        BrowserAnimationsModule,
        FontAwesomeModule,
      ],
      declarations: [
        TweetComponent,
        RelativeDatePipe,
      ],
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TweetComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should return a string with the address of tweet\'s page', () => {
    const tweet: Tweet = {id: '123456'};
    const app = fixture.debugElement.componentInstance;
    const expectedAddress = `https://twitter.com/i/web/status/${tweet.id}`;

    app.tweet = tweet;
    const address = app.getTweetAddress();

    expect(address).toBe(expectedAddress);
  });

  it('should open a new window with tweet\'s page', () => {
    component.tweet = {id: '123456'};
    const app = fixture.debugElement.componentInstance;
    spyOn(window, 'open').and.stub();

    app.onClick();

    expect(window.open).toHaveBeenCalled();
  });


  it('should render a tweet', () => {
    const tweet = {
      id: '123456',
      createdAt: new Date().toDateString(),
      text: 'LivePerson',
      user: {
        id: '123456',
        name: 'LivePerson',
        screenName: 'lp',
        profileImage: '',
        url: ''
      },
    };
    component.tweet = tweet;
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;

    const name = compiled.querySelector('p.name').textContent;
    const screenName = compiled.querySelector('p.username').textContent;
    const message = compiled.querySelector('p.message').textContent;

    expect(name).toContain(tweet.user.name);
    expect(screenName).toBe(`@${tweet.user.screenName}`);
    expect(message).toBe(tweet.text);
  });
});
