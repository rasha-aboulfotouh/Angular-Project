import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VProductComponent } from './v-product.component';

describe('VProductComponent', () => {
  let component: VProductComponent;
  let fixture: ComponentFixture<VProductComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [VProductComponent]
    });
    fixture = TestBed.createComponent(VProductComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
