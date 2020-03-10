import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-third-component',
  templateUrl: './third-component.component.html',
  styleUrls: ['./third-component.component.css']
})
export class ThirdComponentComponent implements OnInit {


Header ='This is a Third Component'
button = "Press Button"

  constructor() { 
    setTimeout(()=> {this.Header = 'After time out'},2000);
  }

  ngOnInit(): void {
  }

  OnBtnClick()
  {
    this.button ='You clicked the button'
    setTimeout(()=> {this.button = 'Press Button'},5000);
  }

}
