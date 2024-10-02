import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ComboFieldTemplateComponent } from './combo-field-template.component';

describe('ComboFieldTemplateComponent', () => {
  let component: ComboFieldTemplateComponent;
  let fixture: ComponentFixture<ComboFieldTemplateComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ComboFieldTemplateComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ComboFieldTemplateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
