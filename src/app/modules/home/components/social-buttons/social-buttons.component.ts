import { Component } from '@angular/core';
import { faFacebookF, faLinkedinIn, faTwitter, faYoutube, IconDefinition } from '@fortawesome/free-brands-svg-icons';

import { faLivePerson } from 'src/app/shared/icons';
import { LocalIconDefinition } from 'src/app/shared/models';

@Component({
  selector: 'app-social-buttons',
  templateUrl: './social-buttons.component.html',
  styleUrls: ['./social-buttons.component.sass']
})
export class SocialButtonsComponent {
  faFacebookF: IconDefinition = faFacebookF;
  faLinkedinIn: IconDefinition = faLinkedinIn;
  faTwitter: IconDefinition = faTwitter;
  faYoutube: IconDefinition = faYoutube;
  faLivePerson: LocalIconDefinition = faLivePerson;
}
