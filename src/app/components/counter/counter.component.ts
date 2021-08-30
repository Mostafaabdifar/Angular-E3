import { stringify } from '@angular/compiler/src/util';
import { Component, OnInit } from '@angular/core';
import { ComputingService } from 'src/app/service/computing.service';
@Component({
  selector: 'app-counter',
  templateUrl: './counter.component.html',
  styleUrls: ['./counter.component.scss']
})
export class CounterComponent implements OnInit {
  log:string[]=[];
  constructor(
    public ComputingService:ComputingService ) {
   }

  ngOnInit(): void {
    this.ComputingService.Timer();
    this.ComputingService.subject.subscribe(
      
      data =>{
        this.log.push(data)
      }
    )
  }


}
