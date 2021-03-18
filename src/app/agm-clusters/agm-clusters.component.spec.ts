import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AgmClustersComponent } from './agm-clusters.component';

describe('AgmClustersComponent', () => {
  let component: AgmClustersComponent;
  let fixture: ComponentFixture<AgmClustersComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AgmClustersComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AgmClustersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
