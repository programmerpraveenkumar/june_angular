import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HomeComponent } from './home.component';
import{HttpClientTestingModule} from '@angular/common/http/testing'
import{HttpClient, HttpHeaders} from '@angular/common/http';
import {CommonServiceService} from '../common-service.service';

import * as Rx from 'rxjs';
describe('HomeComponent', () => {
  let component: HomeComponent;
  let fixture: ComponentFixture<HomeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports:[HttpClientTestingModule],
      declarations: [ HomeComponent ],
      
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(HomeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
  it('getName testcase',()=>{
    expect(component.getName()).toBe("test")
  })
  it('check http message response',()=>{
    let service = TestBed.inject(CommonServiceService); 
   spyOn(service,"getHttp").and.callFake(()=>{
      return Rx.of([{"message":"messgetxt"}]);
    });
    component.getProduct();
    expect(component.messages).toEqual([{"message":"messgetxt"}]);

  })
  it('check http product response',()=>{
    let service = TestBed.inject(CommonServiceService); 
     spyOn(service,"getHttp").and.callFake(()=>{
      return Rx.of([{"name":"product"}]);
    });
    component.getProduct();
    expect(component.messages).toEqual([{"name":"product"}]);

  })
});
