import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GgmaproadComponent } from './ggmaproad.component';

describe('GgmaproadComponent', () => {
  let component: GgmaproadComponent;
  let fixture: ComponentFixture<GgmaproadComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GgmaproadComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(GgmaproadComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
