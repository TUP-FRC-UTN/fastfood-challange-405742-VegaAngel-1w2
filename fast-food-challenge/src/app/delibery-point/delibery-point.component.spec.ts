import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DeliberyPointComponent } from './delibery-point.component';

describe('DeliberyPointComponent', () => {
  let component: DeliberyPointComponent;
  let fixture: ComponentFixture<DeliberyPointComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DeliberyPointComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DeliberyPointComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
