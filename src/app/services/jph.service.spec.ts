import { TestBed } from '@angular/core/testing';

import { JphService } from './jph.service';

describe('JphService', () => {
  let service: JphService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(JphService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
