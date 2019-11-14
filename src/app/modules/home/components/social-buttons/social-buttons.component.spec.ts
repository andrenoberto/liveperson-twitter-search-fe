import {async, ComponentFixture, TestBed} from '@angular/core/testing';
import {FontAwesomeModule} from '@fortawesome/angular-fontawesome';

import {SocialButtonsComponent} from './social-buttons.component';
import {SocialButtonComponent} from '../social-button/social-button.component';

describe('SocialButtonsComponent', () => {
  let component: SocialButtonsComponent;
  let fixture: ComponentFixture<SocialButtonsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [FontAwesomeModule],
      declarations: [
        SocialButtonsComponent,
        SocialButtonComponent,
      ],
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SocialButtonsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should render five app-social-buttons', () => {
    const socialButtonsComponent = TestBed.createComponent(SocialButtonsComponent);
    socialButtonsComponent.detectChanges();
    const compiled = socialButtonsComponent.debugElement.nativeElement;

    const socialButtons = compiled.querySelectorAll('app-social-button');

    expect(socialButtons.length).toBe(5);
  });
});
