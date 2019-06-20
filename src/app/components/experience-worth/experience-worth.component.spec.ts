import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ExperienceWorthComponent } from './experience-worth.component';

describe('ExperienceWorthComponent', () => {
  let component: ExperienceWorthComponent;
  let fixture: ComponentFixture<ExperienceWorthComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ExperienceWorthComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ExperienceWorthComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
