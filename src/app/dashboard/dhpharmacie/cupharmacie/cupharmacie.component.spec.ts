import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CUpharmacieComponent } from './cupharmacie.component';

describe('CUpharmacieComponent', () => {
  let component: CUpharmacieComponent;
  let fixture: ComponentFixture<CUpharmacieComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CUpharmacieComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CUpharmacieComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
