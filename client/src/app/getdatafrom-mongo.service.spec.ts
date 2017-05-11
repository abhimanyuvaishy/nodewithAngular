import { TestBed, inject } from '@angular/core/testing';

import { GetdatafromMongoService } from './getdatafrom-mongo.service';

describe('GetdatafromMongoService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [GetdatafromMongoService]
    });
  });

  it('should ...', inject([GetdatafromMongoService], (service: GetdatafromMongoService) => {
    expect(service).toBeTruthy();
  }));
});
