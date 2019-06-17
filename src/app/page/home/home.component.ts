import { Component, OnInit } from '@angular/core';
import { AppService } from '../../app.service';
import { Config } from '../../app.config';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  config = Config;
  contents = Config.startPage.contents;

  constructor(public app: AppService) {
  }

  ngOnInit() {
  }

}
