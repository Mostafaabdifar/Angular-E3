import { ComputingService } from 'src/app/service/computing.service';
import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-button1',
  templateUrl: './button1.component.html',
  styleUrls: ['./button1.component.scss']
})
export class Button1Component implements OnInit {
  additionNumber:number = 1;

  constructor(public ComputingService:ComputingService) { }

  ngOnInit(): void {
  }
  clickAdd1(){
    this.ComputingService.counterNumber = this.ComputingService.counterNumber+ 1;
  }
}
