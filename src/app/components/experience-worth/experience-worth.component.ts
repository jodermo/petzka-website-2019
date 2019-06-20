import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-experience-worth',
  templateUrl: './experience-worth.component.html',
  styleUrls: ['./experience-worth.component.css']
})
export class ExperienceWorthComponent implements OnInit {
  @Input() value: number;

  constructor() {
  }

  ngOnInit() {
  }

}
