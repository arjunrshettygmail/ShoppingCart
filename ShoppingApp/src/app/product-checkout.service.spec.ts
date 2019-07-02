import { TestBed } from '@angular/core/testing';

import { ProductCheckoutService } from './product-checkout.service';

describe('ProductCheckoutService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: ProductCheckoutService = TestBed.get(ProductCheckoutService);
    expect(service).toBeTruthy();
  });
});
