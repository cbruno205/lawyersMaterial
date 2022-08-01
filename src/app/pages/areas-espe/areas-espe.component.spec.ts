import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AreasEspeComponent } from './areas-espe.component';

describe('AreasEspeComponent', () => {
  let component: AreasEspeComponent;
  let fixture: ComponentFixture<AreasEspeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AreasEspeComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AreasEspeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
