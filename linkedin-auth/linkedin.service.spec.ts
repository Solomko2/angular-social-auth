import { TestBed, inject } from '@angular/core/testing';

import { LinkedinService } from './linkedin.service';

describe('LinkedinService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [LinkedinService]
    });
  });

  it('should be created', inject([LinkedinService], (service: LinkedinService) => {
    expect(service).toBeTruthy();
  }));
});
