import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ConvocatoriatresComponent } from './convocatoriatres.component';

describe('ConvocatoriatresComponent', () => {
  let component: ConvocatoriatresComponent;
  let fixture: ComponentFixture<ConvocatoriatresComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ConvocatoriatresComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ConvocatoriatresComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
