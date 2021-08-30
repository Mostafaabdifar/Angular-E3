
import { ComputingService } from 'src/app/service/computing.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-button1',
  templateUrl: './button.component.html',
  styleUrls: ['./button.component.scss']
})
export class ButtonComponent implements OnInit {
  additionNumber1:number = 1;
  additionNumber2:number = 2;
  additionNumber3:number = 3;
  additionNumber4:number = 4;

  constructor(public ComputingService:ComputingService) { }

  ngOnInit(): void {
  }
  add(value:number){
    this.ComputingService.calculate(value);
    this.ComputingService.subject.subscribe(response =>{
      console.log(response)
    })

  }
}
