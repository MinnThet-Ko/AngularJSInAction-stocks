import { TestBed } from '@angular/core/testing';

import { StocksService } from './stocks.service';

describe('StockService', () => {
  let service: StocksService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(StocksService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
