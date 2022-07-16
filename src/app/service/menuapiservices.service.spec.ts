import { TestBed } from '@angular/core/testing';

import { MenuapiservicesService } from './menuapiservices.service';

describe('MenuapiservicesService', () => {
  let service: MenuapiservicesService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(MenuapiservicesService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
