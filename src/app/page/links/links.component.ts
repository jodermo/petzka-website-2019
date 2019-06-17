import { Component, OnInit } from '@angular/core';
import { Config } from '../../app.config';
import { AppService } from '../../app.service';

@Component({
  selector: 'app-links',
  templateUrl: './links.component.html',
  styleUrls: ['./links.component.css']
})
export class LinksComponent implements OnInit {
  config = Config;
  links = Config.links;

  constructor(public app: AppService) {

  }

  ngOnInit() {
    setTimeout(() => {
      this.app.showLink(null);
    }, 100);

  }

}
