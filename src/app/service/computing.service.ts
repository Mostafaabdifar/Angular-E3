import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ComputingService {
   
  private counter:number = 1000;
  
  subject:Subject<string> = new Subject();

  constructor() {}

  calculate(number:number){
    this.counterNumber += number;
    this.subject.next(`Added ${number}`);
  }
  Timer(){
    setInterval(()=>{
      this.counterNumber -=1;
      this.subject.next('Decreased')
    },1000)
  }

  get counterNumber(){
  return this.counter;
  }

  set counterNumber(num :number){
  this.counter = num;
  }


}
