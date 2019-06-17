import { Component, ElementRef, Input, OnInit, ViewChild } from '@angular/core';
import { AppService } from '../../app.service';
import { render } from 'github-buttons';

@Component({
  selector: 'app-social-media-buttons',
  templateUrl: './social-media-buttons.component.html',
  styleUrls: ['./social-media-buttons.component.css']
})
export class SocialMediaButtonsComponent implements OnInit {
  @Input() githubUser: string = null;
  @Input() xingProfile: string = null;
  @Input() freelancermap: string = null;
  @Input() dasauge: string = null;
  @Input() youtube: string = null;
  @Input() soundcloudUsers: any[] = [];
  @Input() soundcloudColor: string;
  @Input() instagram: string = null;
  @Input() facebook: string = null;
  @Input() language = 'de';
  @ViewChild('github', {static: true}) github: ElementRef;

  soundcloudLinks = [];

  constructor(public app: AppService) {
  }

  ngOnInit() {
    this.initButtons();
  }

  initButtons() {
    if (this.githubUser) {
      render({href: 'https://github.com/' + this.githubUser}, (el) => {
        if (this.github.nativeElement) {
          this.github.nativeElement.appendChild(el);
        }
      });
    }
    if (this.soundcloudUsers) {
      for (const scUser of this.soundcloudUsers) {
        this.soundcloudLinks.push(this.app.secureURL('https://w.soundcloud.com/icon/?url=http%3A%2F%2Fsoundcloud.com%2F' + scUser + '&color=' + (this.soundcloudColor || 'orange_transparent') + '&size=32'));
      }

    }
  }


}
