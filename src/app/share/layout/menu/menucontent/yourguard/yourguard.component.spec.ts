import { ComponentFixture, TestBed } from '@angular/core/testing';

import { YourguardComponent } from './yourguard.component';

describe('YourguardComponent', () => {
  let component: YourguardComponent;
  let fixture: ComponentFixture<YourguardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ YourguardComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(YourguardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
