import { trigger, transition, style, animate } from '@angular/animations';

export const fadeOutAnimation = trigger('fadeOut', [
    transition(':leave', [
      style({ opacity: 1 }),
      animate('300ms ease-in', style({ opacity: 0 })),
    ]),
]);
  
