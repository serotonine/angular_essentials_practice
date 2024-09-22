import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { InvestmentCalculatorComponent } from './investment-calculator.component';
import { InvestmentInputComponent } from './investment-input/investment-input.component';
import { InvestmentResultsComponent } from './investment-results/investment-results.component';

@NgModule({
  declarations: [
    InvestmentCalculatorComponent,
    InvestmentInputComponent,
    InvestmentResultsComponent,
  ],
  imports: [CommonModule],
  exports: [InvestmentCalculatorComponent],
})
export class InvestmentCalculatorModule {}
