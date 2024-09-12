import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FieldTemplateComponent } from './field-template.component';

describe('FieldTemplateComponent', () => {
  let component: FieldTemplateComponent;
  let fixture: ComponentFixture<FieldTemplateComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FieldTemplateComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FieldTemplateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
