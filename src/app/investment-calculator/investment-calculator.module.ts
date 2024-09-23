import { NgModule, LOCALE_ID } from '@angular/core';
import { CommonModule, registerLocaleData } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { InvestmentCalculatorComponent } from './investment-calculator.component';
import { InvestmentInputComponent } from './investment-input/investment-input.component';
import { InvestmentResultsComponent } from './investment-results/investment-results.component';
import { InvestmentCalculatorService } from './investment-calculator.service';
import { CurrencyPipe } from '@angular/common';
import localeFr from '@angular/common/locales/fr';
registerLocaleData(localeFr);

@NgModule({
  declarations: [
    InvestmentCalculatorComponent,
    InvestmentInputComponent,
    InvestmentResultsComponent,
  ],
  providers: [
    InvestmentCalculatorService,
    { provide: LOCALE_ID, useValue: 'fr-FR' },
  ],
  imports: [CommonModule, FormsModule, CurrencyPipe],
  exports: [InvestmentCalculatorComponent],
})
export class InvestmentCalculatorModule {}
