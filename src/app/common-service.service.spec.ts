import { TestBed } from '@angular/core/testing';

import { CommonServiceService } from './common-service.service';
import{HttpClientTestingModule} from '@angular/common/http/testing'
import{HttpClient, HttpHeaders} from '@angular/common/http';
describe('CommonServiceService', () => {
  let service: CommonServiceService;
  let httpClient:HttpClient

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports:[HttpClientTestingModule]
    });
    service = TestBed.inject(CommonServiceService);    
    httpClient = TestBed.inject(HttpClient);    
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
