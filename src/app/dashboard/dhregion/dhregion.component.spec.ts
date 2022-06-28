import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DhregionComponent } from './dhregion.component';

describe('DhregionComponent', () => {
  let component: DhregionComponent;
  let fixture: ComponentFixture<DhregionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DhregionComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DhregionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
