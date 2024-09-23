import { Component } from '@angular/core';
import { InvestmentCalculatorService } from './investment-calculator.service';

@Component({
  selector: 'app-investment-calculator',
  standalone: false,
  templateUrl: './investment-calculator.component.html',
  styleUrl: './investment-calculator.component.css',
})
export class InvestmentCalculatorComponent {
  constructor(
    private _investmentCalculatorService: InvestmentCalculatorService
  ) {}

  getResults() {
    return this._investmentCalculatorService.calculateInvestmentResults();
  }
}
