import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BasiccolumnComponent } from './basiccolumn.component';

describe('BasiccolumnComponent', () => {
  let component: BasiccolumnComponent;
  let fixture: ComponentFixture<BasiccolumnComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BasiccolumnComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BasiccolumnComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
