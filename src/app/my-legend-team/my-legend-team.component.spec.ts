import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MyLegendTeamComponent } from './my-legend-team.component';

describe('MyLegendTeamComponent', () => {
  let component: MyLegendTeamComponent;
  let fixture: ComponentFixture<MyLegendTeamComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MyLegendTeamComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MyLegendTeamComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
