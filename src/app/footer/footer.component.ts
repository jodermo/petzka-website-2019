import { Component, OnInit } from '@angular/core';
import { AppService } from '../app.service';
import { Config } from '../app.config';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css']
})
export class FooterComponent implements OnInit {

  navigation = Config.footer.navigation;

  constructor(public app: AppService) {
  }


  ngOnInit() {
  }

}
