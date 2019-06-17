import { Component, OnInit } from '@angular/core';
import { AppService } from '../app.service';
import { Config } from '../app.config';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  navigation = Config.navigation;

  constructor(public app: AppService) {
  }

  ngOnInit() {
  }

}
