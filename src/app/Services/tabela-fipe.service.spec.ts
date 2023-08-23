import { TestBed } from '@angular/core/testing';

import { TabelaFipeService } from './tabela-fipe.service';

describe('TabelaFipeService', () => {
  let service: TabelaFipeService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(TabelaFipeService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
