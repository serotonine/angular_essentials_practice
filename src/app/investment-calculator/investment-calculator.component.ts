import { Component } from '@angular/core';
import { InvestmentInputComponent } from './investment-input/investment-input.component';
import { InvestmentResultsComponent } from './investment-results/investment-results.component';

@Component({
  selector: 'app-investment-calculator',
  standalone: true,
  imports: [InvestmentInputComponent, InvestmentResultsComponent],
  templateUrl: './investment-calculator.component.html',
  styleUrl: './investment-calculator.component.css',
})
export class InvestmentCalculatorComponent {}
