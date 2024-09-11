import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BaseNumberComponent } from './base-number.component';

describe('BaseNumberComponent', () => {
  let component: BaseNumberComponent;
  let fixture: ComponentFixture<BaseNumberComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BaseNumberComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BaseNumberComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
