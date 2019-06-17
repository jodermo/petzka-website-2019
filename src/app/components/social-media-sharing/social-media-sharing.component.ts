import { Component, ElementRef, Input, OnInit, ViewChild } from '@angular/core';
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

import { faEnvelope } from '@fortawesome/free-regular-svg-icons/faEnvelope';
import { faPrint } from '@fortawesome/free-solid-svg-icons/faPrint';

@Component({
  selector: 'app-social-media-sharing',
  templateUrl: './social-media-sharing.component.html',
  styleUrls: ['./social-media-sharing.component.css'],
})
export class SocialMediaSharingComponent implements OnInit {
  @Input() url = null;

  @Input() buttonSet = ['email', 'twitter', 'pinterest', 'linkedIn', 'digg', 'facebook', 'google+', 'reddit', 'stumbleUpon', 'tumblr', 'vk'];


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

  constructor(public app: AppService) {
  }

  ngOnInit() {

  }

  available(buttonName: string) {
    if (this.buttonSet.length && this.buttonSet[0] !== 'all') {
      for (const name of this.buttonSet) {
        if (buttonName === name) {
          return true;
        }
      }
      return false;
    } else {
      return true;
    }
  }


  shareOnPrintarest() {
    const e = document.createElement('script');
    e.setAttribute('type', 'text/javascript');
    e.setAttribute('charset', 'UTF-8');
    e.setAttribute('src', 'http://assets.pinterest.com/js/pinmarklet.js?r=' + Math.random() * 99999999);
    document.body.appendChild(e);
  }
}
