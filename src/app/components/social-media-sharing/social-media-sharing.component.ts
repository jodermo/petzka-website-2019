import { Component, ElementRef, Input, OnInit, ViewChild } from '@angular/core';
import { AppService } from '../../app.service';

import { faFacebookSquare } from '@fortawesome/free-brands-svg-icons/faFacebookSquare';
import { faTwitterSquare } from '@fortawesome/free-brands-svg-icons/faTwitterSquare';
import { faPinterest } from '@fortawesome/free-brands-svg-icons/faPinterest';


@Component({
  selector: 'app-social-media-sharing',
  templateUrl: './social-media-sharing.component.html',
  styleUrls: ['./social-media-sharing.component.css'],
})
export class SocialMediaSharingComponent implements OnInit {
  @Input() xing = true;
  @Input() facebook = true;


  fbIcon = faFacebookSquare;
  pinIcon = faPinterest;
  tweetIcon = faTwitterSquare;

  constructor(public app: AppService) {
  }

  ngOnInit() {
    this.initButtons();
  }

  initButtons() {

  }
}
