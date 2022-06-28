import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CUzoneComponent } from './cuzone.component';

describe('CUzoneComponent', () => {
  let component: CUzoneComponent;
  let fixture: ComponentFixture<CUzoneComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CUzoneComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CUzoneComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
