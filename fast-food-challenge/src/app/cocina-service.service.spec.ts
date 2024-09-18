import { TestBed } from '@angular/core/testing';

import { CocinaServiceService } from './cocina-service.service';

describe('CocinaServiceService', () => {
  let service: CocinaServiceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CocinaServiceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
