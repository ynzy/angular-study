import { TestBed } from '@angular/core/testing';

import { ObserveGeolocationService } from './observe-geolocation.service';

describe('ObserveGeolocationService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: ObserveGeolocationService = TestBed.get(ObserveGeolocationService);
    expect(service).toBeTruthy();
  });
});
