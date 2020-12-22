import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GalleriaautoComponent } from './galleriaauto.component';

describe('GalleriaautoComponent', () => {
  let component: GalleriaautoComponent;
  let fixture: ComponentFixture<GalleriaautoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GalleriaautoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(GalleriaautoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
