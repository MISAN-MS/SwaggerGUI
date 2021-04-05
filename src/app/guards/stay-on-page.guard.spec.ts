import { TestBed } from '@angular/core/testing';

import { StayOnPageGuard } from './stay-on-page.guard';

describe('StayOnPageGuard', () => {
  let guard: StayOnPageGuard;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    guard = TestBed.inject(StayOnPageGuard);
  });

  it('should be created', () => {
    expect(guard).toBeTruthy();
  });
});
