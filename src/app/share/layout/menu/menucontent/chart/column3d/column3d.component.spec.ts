import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Column3dComponent } from './column3d.component';

describe('Column3dComponent', () => {
  let component: Column3dComponent;
  let fixture: ComponentFixture<Column3dComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Column3dComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Column3dComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
