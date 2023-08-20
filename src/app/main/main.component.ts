import { Component } from '@angular/core';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css']
})
export class MainComponent {
  displayValue: string = '';

  addToDisplay(value: string) {
    this.displayValue += value;
  }

  calculate() {
    try {
      this.displayValue = eval(this.displayValue);
    } catch (error) {
      this.displayValue = 'Error';
    }
  }

  clearDisplay() {
    this.displayValue = '';
  }
}
