import { Component, Input } from '@angular/core';
import { IconDefinition } from '@fortawesome/fontawesome-svg-core';

import { LocalIconDefinition } from 'src/app/shared/models';

@Component({
  selector: 'app-social-button',
  templateUrl: './social-button.component.html',
  styleUrls: ['./social-button.component.sass']
})
export class SocialButtonComponent {
  @Input() href: string;
  @Input() target: string;
  @Input() variant: string;
  @Input() icon: IconDefinition | LocalIconDefinition;
}
