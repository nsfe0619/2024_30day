import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ComboAddressComponent } from './combo-address.component';

describe('ComboAddressComponent', () => {
  let component: ComboAddressComponent;
  let fixture: ComponentFixture<ComboAddressComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ComboAddressComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ComboAddressComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
