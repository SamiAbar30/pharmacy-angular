import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CUvilleComponent } from './cuville.component';

describe('CUvilleComponent', () => {
  let component: CUvilleComponent;
  let fixture: ComponentFixture<CUvilleComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CUvilleComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CUvilleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
