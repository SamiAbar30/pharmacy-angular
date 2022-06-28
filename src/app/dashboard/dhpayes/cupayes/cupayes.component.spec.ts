import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CUpayesComponent } from './cupayes.component';

describe('CUpayesComponent', () => {
  let component: CUpayesComponent;
  let fixture: ComponentFixture<CUpayesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CUpayesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CUpayesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
