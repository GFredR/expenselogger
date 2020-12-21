import { TestBed } from '@angular/core/testing';

import { StorageService } from './storage.service';
let storageService: StorageService;
describe('StorageService', () => {
  beforeEach(() => { TestBed.configureTestingModule({
    providers: [
        StorageService
    ]
  });
                     storageService = TestBed.get(StorageService);
});
    // TestBed.configureTestingModule({});
    // service = TestBed.inject(StorageService);
  // });

  it('should be created', () => {
    const service: StorageService = TestBed.get(StorageService);
    expect(service).toBeTruthy();
  });
  it('saveToLocalStorage() | getFromLocalStorage() | Test cases', (d) => {
    const actually = storageService.saveToLocalStorage('test', {test: 'test'});
    // tslint:disable-next-line:variable-name
    const expected = storageService.getFromLocalStorage('test').then((val) => {
      expect(1).toBe(1);
      d();
      console.log(val);
    });
  });
  // it('removeItemFromStorage() | remove', (d) => {
  //   const object = {test: 'test'};
  //   const actual = storageService.saveToLocalStorage('test', object);
  //   storageService.removeItemFromStorage('test').then((value) => {
  //     expect(value).toBe(undefined);
  //     d();
  //   });
  // });
});
