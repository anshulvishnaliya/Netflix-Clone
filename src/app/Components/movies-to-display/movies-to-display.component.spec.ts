import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MoviesToDisplayComponent } from './movies-to-display.component';

describe('MoviesToDisplayComponent', () => {
  let component: MoviesToDisplayComponent;
  let fixture: ComponentFixture<MoviesToDisplayComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [MoviesToDisplayComponent]
    });
    fixture = TestBed.createComponent(MoviesToDisplayComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
