import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DetailpharmacieComponent } from './detailpharmacie.component';

describe('DetailpharmacieComponent', () => {
  let component: DetailpharmacieComponent;
  let fixture: ComponentFixture<DetailpharmacieComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DetailpharmacieComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DetailpharmacieComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
