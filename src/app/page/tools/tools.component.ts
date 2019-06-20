import { Component, OnInit } from '@angular/core';
import { Config } from '../../app.config';
import { AppService } from '../../app.service';

@Component({
  selector: 'app-tools',
  templateUrl: './tools.component.html',
  styleUrls: ['./tools.component.css']
})
export class ToolsComponent implements OnInit {
  config = Config;
  contents = Config.content.contents;


  constructor(public app: AppService) {
  }

  ngOnInit() {

  }

}
