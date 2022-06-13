import { TestBed } from '@angular/core/testing';

import { GetlistaService } from './getlista.service';

describe('GetlistaService', () => {
  let service: GetlistaService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(GetlistaService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
