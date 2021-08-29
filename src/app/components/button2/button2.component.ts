import { ComputingService } from 'src/app/service/computing.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-button2',
  templateUrl: './button2.component.html',
  styleUrls: ['./button2.component.scss']
})
export class Button2Component implements OnInit {

  additionNumber:number = 2;

  constructor(public ComputingService:ComputingService) { }

  ngOnInit(): void {
  }
  clickAdd2(){
    this.ComputingService.counterNumber = this.ComputingService.counterNumber+ 2;
  }
}
