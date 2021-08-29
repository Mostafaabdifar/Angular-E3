import { ComputingService } from 'src/app/service/computing.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-button4',
  templateUrl: './button4.component.html',
  styleUrls: ['./button4.component.scss']
})
export class Button4Component implements OnInit {
  additionNumber:number =4;
  constructor(
    public ComputingService:ComputingService) { }

  ngOnInit(): void {
  }
  clickAdd4(){
    this.ComputingService.counterNumber = this.ComputingService.counterNumber+4;
  }

}
