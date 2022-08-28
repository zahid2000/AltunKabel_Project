import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HardProductsComponent } from './hard-products.component';

describe('HardProductsComponent', () => {
  let component: HardProductsComponent;
  let fixture: ComponentFixture<HardProductsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HardProductsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(HardProductsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
