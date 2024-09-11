import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BaseTelComponent } from './base-tel.component';

describe('BaseTelComponent', () => {
  let component: BaseTelComponent;
  let fixture: ComponentFixture<BaseTelComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BaseTelComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BaseTelComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
