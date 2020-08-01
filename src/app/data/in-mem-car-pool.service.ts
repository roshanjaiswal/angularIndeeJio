import { Injectable } from '@angular/core';
import { InMemoryDbService } from 'angular-in-memory-web-api';

@Injectable({
  providedIn: 'root'
})
export class InMemCarPoolService implements InMemoryDbService {
  createDb() {
    let test = []
    return {test};
  }
}
