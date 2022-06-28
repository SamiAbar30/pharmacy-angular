import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CUregionComponent } from './curegion.component';

describe('CUregionComponent', () => {
  let component: CUregionComponent;
  let fixture: ComponentFixture<CUregionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CUregionComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CUregionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
