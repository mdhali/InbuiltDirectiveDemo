import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-attribute-directive-demo',
  templateUrl: './attribute-directive-demo.component.html',
  styleUrls: ['./attribute-directive-demo.component.css']
})
export class AttributeDirectiveDemoComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  isVisible(visible: boolean) {
    if (visible) {
      return 'darkBlack';
    } else {
      return "veryLight";
    }
  }

  isHighlighted(colored: boolean) {
    if (colored) {
      return "red";
    }
  }

}
