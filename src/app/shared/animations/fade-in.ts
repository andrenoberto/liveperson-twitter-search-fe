import { trigger, style, state, transition, animate, keyframes } from '@angular/animations';

export const fadeIn = trigger('fadeInOut', [
  state('void', style({
    opacity: 0
  })),
  transition('void => *', animate('.5s ease-in', keyframes([
    style({ opacity: 0, transform: 'translateY(-50%)', offset: 0 }),
    style({ opacity: .5, transform: 'translateY(-10px) scale(1.1)', offset: 0.3 }),
    style({ opacity: 1, transform: 'translateY(0)', offset: 1 }),
  ]))),
]);
