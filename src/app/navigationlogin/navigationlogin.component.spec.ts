import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NavigationloginComponent } from './navigationlogin.component';

describe('NavigationloginComponent', () => {
  let component: NavigationloginComponent;
  let fixture: ComponentFixture<NavigationloginComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NavigationloginComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(NavigationloginComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
