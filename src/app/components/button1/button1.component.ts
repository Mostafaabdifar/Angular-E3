import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-button1',
  templateUrl: './button1.component.html',
  styleUrls: ['./button1.component.scss']
})
export class Button1Component implements OnInit {
  additionNumber:number = 1;

  constructor() { }

  ngOnInit(): void {
  }
  clickAdd1(){

  }
}
