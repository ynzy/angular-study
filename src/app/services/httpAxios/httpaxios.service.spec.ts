import { TestBed } from '@angular/core/testing';

import { HttpaxiosService } from './httpaxios.service';

describe('HttpaxiosService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: HttpaxiosService = TestBed.get(HttpaxiosService);
    expect(service).toBeTruthy();
  });
});
