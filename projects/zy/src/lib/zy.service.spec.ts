import { TestBed } from '@angular/core/testing';

import { ZyService } from './zy.service';

describe('ZyService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: ZyService = TestBed.get(ZyService);
    expect(service).toBeTruthy();
  });
});
