import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-calcu',
  templateUrl: './calcu.page.html',
  styleUrls: ['./calcu.page.scss'],
})
export class CalcuPage implements OnInit {
  value="0"
  oldvalue="0"

  constructor() { }

  ngOnInit() {
  }
  numberGroups=[
    [7,8,9, "*"],
    [4,5,6, "*"],
    [1,2,3,"*"],
    [0,"c","/","="],
  ]

}
