import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ComputingService {
   
  private counter:number = 1000;
  
  subject:Subject<number> = new Subject();

  constructor() {}

  get counterNumber(){
  return this.counter;
  }

  set counterNumber(num :number){
  this.counter = num;
  this.subject.next(this.counter)
  }


}
