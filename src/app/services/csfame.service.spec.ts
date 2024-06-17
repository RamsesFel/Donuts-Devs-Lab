import { TestBed } from '@angular/core/testing';

import { CSFameService } from './csfame.service';

describe('CSFameService', () => {
  let service: CSFameService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CSFameService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
