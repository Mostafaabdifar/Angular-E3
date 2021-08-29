import { Component, OnInit } from '@angular/core';
import { ComputingService } from 'src/app/service/computing.service';
@Component({
  selector: 'app-counter',
  templateUrl: './counter.component.html',
  styleUrls: ['./counter.component.scss']
})
export class CounterComponent implements OnInit {
  constructor(
    public ComputingService:ComputingService ) {
   }

  ngOnInit(): void {
    setInterval(()=>{
      this.ComputingService.counterNumber= this.ComputingService.counterNumber-1;
    },1000)
    this.ComputingService.subject.subscribe(
      data =>{
        console.log(data);
      }
    )
  }


}
