import { TestBed } from '@angular/core/testing';

import { BlogDataService } from './blog-data.service';

describe('FetchBlogDataService', () => {
  let service: BlogDataService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(BlogDataService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
