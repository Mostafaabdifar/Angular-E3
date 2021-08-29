import { ComputingService } from 'src/app/service/computing.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-button3',
  templateUrl: './button3.component.html',
  styleUrls: ['./button3.component.scss']
})
export class Button3Component implements OnInit {
  additionNumber:number = 3;
  constructor(
    public ComputingService:ComputingService) {
   }

  ngOnInit(): void {
  }
  clickAdd3(){
    this.ComputingService.counterNumber = this.ComputingService.counterNumber + 3;
  }

}
