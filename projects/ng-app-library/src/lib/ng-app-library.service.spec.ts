import { TestBed } from '@angular/core/testing';

import { NgAppLibraryService } from './ng-app-library.service';

describe('NgAppLibraryService', () => {
  let service: NgAppLibraryService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(NgAppLibraryService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
