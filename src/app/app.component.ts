import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Calculator';
  val: string;

  expression: string="";

  /**
   *
   */
  constructor() {

  }
  /**
 *  takes Values from Event(click) and concates to "expression" variable;
 */
  pressedNumber(value: string): void {
    if (value === "C") {
      this.expression = '';
      return;
    }



    if (value === "B") {
      this.expression = this.expression.slice(0, this.expression.length - 1);
      return;
    }


    if (value === "=") {
      var expressions = require("angular-expressions");
      let evaluate = expressions.compile(this.expression);
      this.expression = evaluate();
      return;
    }

    this.expression = this.expression + value;
    console.log(value);
  }
}
