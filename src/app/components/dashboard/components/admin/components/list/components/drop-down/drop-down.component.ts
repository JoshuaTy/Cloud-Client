import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-drop-down',
  templateUrl: './drop-down.component.html',
  styleUrls: ['./drop-down.component.scss']
})
export class DropDownComponent implements OnInit {  
  allProfiles: any = [{
    id: "1",
    value: "Levocitirizine"
  },{
    id: "2",
    value: "Paracetamol"
  },{
    id: "2",
    value: "Your mom"
  },]

  selectedOption: any;

  constructor() { }

  ngOnInit() {

  }

  getValues() {
    console.log(this.selectedOption);
  }
}