import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CascadeselectComponent } from './cascadeselect.component';

describe('CascadeselectComponent', () => {
  let component: CascadeselectComponent;
  let fixture: ComponentFixture<CascadeselectComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CascadeselectComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CascadeselectComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
