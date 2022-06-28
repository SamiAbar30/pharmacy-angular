import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DhvillesComponent } from './dhvilles.component';

describe('DhvillesComponent', () => {
  let component: DhvillesComponent;
  let fixture: ComponentFixture<DhvillesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DhvillesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DhvillesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
