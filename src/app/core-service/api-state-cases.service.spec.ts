import { TestBed } from '@angular/core/testing';

import { ApiStateCasesService } from './api-state-cases.service';

describe('ApiStateCasesService', () => {
  let service: ApiStateCasesService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ApiStateCasesService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
