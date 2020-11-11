import { TestBed } from '@angular/core/testing';

import { AnimeserviceService } from './animeservice.service';

describe('AnimeserviceService', () => {
  let service: AnimeserviceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(AnimeserviceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
