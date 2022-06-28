import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListpharmacieComponent } from './listpharmacie.component';

describe('ListpharmacieComponent', () => {
  let component: ListpharmacieComponent;
  let fixture: ComponentFixture<ListpharmacieComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListpharmacieComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ListpharmacieComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
