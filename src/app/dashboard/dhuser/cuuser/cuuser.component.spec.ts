import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CUuserComponent } from './cuuser.component';

describe('CUuserComponent', () => {
  let component: CUuserComponent;
  let fixture: ComponentFixture<CUuserComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CUuserComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CUuserComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
