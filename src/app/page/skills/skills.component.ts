import { Component, OnInit } from '@angular/core';
import { AppService } from '../../app.service';
import { Config } from '../../app.config';

@Component({
  selector: 'app-skills',
  templateUrl: './skills.component.html',
  styleUrls: ['./skills.component.css']
})
export class SkillsComponent implements OnInit {
  config = Config;
  contents = Config.startPage.contents;

  constructor(public app: AppService) {
  }

  ngOnInit() {
  }


}
