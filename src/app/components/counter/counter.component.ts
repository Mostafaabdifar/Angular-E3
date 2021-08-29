import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-counter',
  templateUrl: './counter.component.html',
  styleUrls: ['./counter.component.scss']
})
export class CounterComponent implements OnInit {

  counter:number = 1000;

  constructor() { }

  ngOnInit(): void {
    setInterval(() =>{
      this.counter -=1; 
    },1000)
  }

}
