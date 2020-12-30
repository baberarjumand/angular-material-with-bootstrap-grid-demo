import { TestBed } from '@angular/core/testing';

import { ComponentInfoService } from './component-info.service';

describe('ComponentInfoService', () => {
  let service: ComponentInfoService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ComponentInfoService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
