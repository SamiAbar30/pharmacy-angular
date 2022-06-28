import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DhzoneComponent } from './dhzone.component';

describe('DhzoneComponent', () => {
  let component: DhzoneComponent;
  let fixture: ComponentFixture<DhzoneComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DhzoneComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DhzoneComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
