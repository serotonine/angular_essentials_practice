import { Component } from '@angular/core';
import { HeaderComponent } from './header/header.component';
import { InvestmentCalculatorComponent } from './investment-calculator/investment-calculator.component';

@Component({
  selector: 'app-root',
  standalone: true,
  templateUrl: './app.component.html',
  imports: [HeaderComponent, InvestmentCalculatorComponent],
})
export class AppComponent {}
