import { TestBed } from '@angular/core/testing';

import { AuthServiceService } from './auth-service.service';
import { RouterTestingModule } from '@angular/router/testing';
describe('AuthServiceService', () => {
  let service: AuthServiceService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports:[RouterTestingModule]
    });
    service = TestBed.inject(AuthServiceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
