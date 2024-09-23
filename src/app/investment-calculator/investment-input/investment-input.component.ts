import { Component, Output, EventEmitter } from '@angular/core';
import { InvestmentInput } from '../investment-calculator.model';
import { InvestmentCalculatorService } from '../investment-calculator.service';

@Component({
  selector: 'app-investment-input',
  standalone: false,
  templateUrl: './investment-input.component.html',
  styleUrl: './investment-input.component.css',
})
export class InvestmentInputComponent {
  constructor(
    private investmentCalculatorService: InvestmentCalculatorService
  ) {}
  @Output() formSubmitted = new EventEmitter<InvestmentInput>();
  userInput = {} as InvestmentInput;
  onSubmit() {
    this.formSubmitted.emit({
      initial_invest: this.userInput.initial_invest,
      annual_invest: this.userInput.annual_invest,
      expected_return: this.userInput.expected_return,
      duration: this.userInput.duration,
    });
    this.investmentCalculatorService.setUserInput(this.userInput);
  }
}
