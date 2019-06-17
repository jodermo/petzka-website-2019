import { Component, OnInit } from '@angular/core';
import { AppService } from '../app.service';

@Component({
  selector: 'app-language-selector',
  templateUrl: './language-selector.component.html',
  styleUrls: ['./language-selector.component.css']
})
export class LanguageSelectorComponent implements OnInit {

  currLangAlias;

  constructor(public app: AppService) {
  }

  ngOnInit() {
    if (this.app.currentLanguage) {
      this.currLangAlias = this.app.currentLanguage.alias;
    }
  }

}
