import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DhuserComponent } from './dhuser.component';

describe('DhuserComponent', () => {
  let component: DhuserComponent;
  let fixture: ComponentFixture<DhuserComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DhuserComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DhuserComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
