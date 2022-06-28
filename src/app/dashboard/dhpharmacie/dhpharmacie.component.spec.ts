import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DhpharmacieComponent } from './dhpharmacie.component';

describe('DhpharmacieComponent', () => {
  let component: DhpharmacieComponent;
  let fixture: ComponentFixture<DhpharmacieComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DhpharmacieComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DhpharmacieComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
