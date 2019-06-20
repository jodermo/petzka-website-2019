import { Component, Input, OnInit } from '@angular/core';
import { AppService } from '../../app.service';

import { faFacebookSquare } from '@fortawesome/free-brands-svg-icons/faFacebookSquare';
import { faTwitterSquare } from '@fortawesome/free-brands-svg-icons/faTwitterSquare';
import { faPinterest } from '@fortawesome/free-brands-svg-icons/faPinterest';
import { faDigg } from '@fortawesome/free-brands-svg-icons/faDigg';
import { faGooglePlus } from '@fortawesome/free-brands-svg-icons/faGooglePlus';
import { faLinkedin } from '@fortawesome/free-brands-svg-icons/faLinkedin';
import { faReddit } from '@fortawesome/free-brands-svg-icons/faReddit';
import { faStumbleupon } from '@fortawesome/free-brands-svg-icons/faStumbleupon';
import { faTumblr } from '@fortawesome/free-brands-svg-icons/faTumblr';
import { faVk } from '@fortawesome/free-brands-svg-icons/faVK';
import { faXing } from '@fortawesome/free-brands-svg-icons/faXing';
import { faGithub } from '@fortawesome/free-brands-svg-icons/faGithub';
import { faSoundcloud } from '@fortawesome/free-brands-svg-icons/faSoundcloud';
import { faYoutube } from '@fortawesome/free-brands-svg-icons/faYoutube';

import { faDochub } from '@fortawesome/free-brands-svg-icons/faDochub';
import { faBitbucket } from '@fortawesome/free-brands-svg-icons/faBitbucket';

import { faEnvelope } from '@fortawesome/free-regular-svg-icons/faEnvelope';
import { faPrint } from '@fortawesome/free-solid-svg-icons/faPrint';

@Component({
  selector: 'app-social-media-buttons',
  templateUrl: './social-media-buttons.component.html',
  styleUrls: ['./social-media-buttons.component.css']
})
export class SocialMediaButtonsComponent implements OnInit {
  @Input() accounts: any = {};
  @Input() language = 'de';

  fbIcon = faFacebookSquare;
  pinIcon = faPinterest;
  tweetIcon = faTwitterSquare;
  diggIcon = faDigg;
  emailIcon = faEnvelope;
  googlePlusIcon = faGooglePlus;
  linkedInIcon = faLinkedin;
  prinIcon = faPrint;
  redditIcon = faReddit;
  stumbleuponIcon = faStumbleupon;
  tumblrIcon = faTumblr;
  vkIcon = faVk;
  xingIcon = faXing;
  githubIcon = faGithub;
  soundcloudIcon = faSoundcloud;
  youtubeIcon = faYoutube;
  dockerIcon = faDochub;
  bitbucketIcon = faBitbucket;

  soundcloudLinks = [];

  constructor(public app: AppService) {
  }

  ngOnInit() {

  }


}
