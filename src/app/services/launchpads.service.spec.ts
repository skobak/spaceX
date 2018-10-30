import { TestBed } from '@angular/core/testing';

import { LaunchpadsService } from './launchpads.service';

describe('LaunchpadsService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: LaunchpadsService = TestBed.get(LaunchpadsService);
    expect(service).toBeTruthy();
  });
});
