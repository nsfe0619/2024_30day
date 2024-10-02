import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ComboRadioTextComponent } from './combo-radio-text.component';

describe('ComboRadioTextComponent', () => {
  let component: ComboRadioTextComponent;
  let fixture: ComponentFixture<ComboRadioTextComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ComboRadioTextComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ComboRadioTextComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
