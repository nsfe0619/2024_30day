import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListPopComponent } from './list-pop.component';

describe('ListPopComponent', () => {
  let component: ListPopComponent;
  let fixture: ComponentFixture<ListPopComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListPopComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ListPopComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
