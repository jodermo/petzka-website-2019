import { Component, AfterViewInit } from '@angular/core';
import { AppService } from './app.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements AfterViewInit {
  loading = true;

  constructor(public app: AppService) {
  }

  ngAfterViewInit() {
    this.app.loading = false;
    setTimeout(() => {
      this.loading = false;
    }, 500);

  }
}
