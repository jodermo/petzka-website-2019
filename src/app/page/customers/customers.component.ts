import { Component, OnInit } from '@angular/core';
import { Config } from '../../app.config';
import { AppService } from '../../app.service';

@Component({
  selector: 'app-customers',
  templateUrl: './customers.component.html',
  styleUrls: ['./customers.component.css']
})
export class CustomersComponent implements OnInit {

  customers = Config.customers;

  constructor(public app: AppService) {
  }

  ngOnInit() {
    setTimeout(() => {
      this.app.showCustomer(null);
    }, 100);

  }

}
