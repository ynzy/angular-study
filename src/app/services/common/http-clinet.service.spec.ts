import { TestBed } from '@angular/core/testing';

import { HttpClinetService } from './http-clinet.service';

describe('HttpClinetService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: HttpClinetService = TestBed.get(HttpClinetService);
    expect(service).toBeTruthy();
  });
});
