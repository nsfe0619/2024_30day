import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BasePasswordComponent } from './base-password.component';

describe('BasePasswordComponent', () => {
  let component: BasePasswordComponent;
  let fixture: ComponentFixture<BasePasswordComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BasePasswordComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BasePasswordComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
