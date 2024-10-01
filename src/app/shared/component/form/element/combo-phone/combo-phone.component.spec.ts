import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ComboPhoneComponent } from './combo-phone.component';

describe('ComboPhoneComponent', () => {
  let component: ComboPhoneComponent;
  let fixture: ComponentFixture<ComboPhoneComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ComboPhoneComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ComboPhoneComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
