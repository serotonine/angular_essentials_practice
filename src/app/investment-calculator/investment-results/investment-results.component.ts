import { Component, Input } from '@angular/core';
import { InvestmentOutput } from '../investment-calculator.model';

@Component({
  selector: 'app-investment-results',
  standalone: false,
  templateUrl: './investment-results.component.html',
  styleUrl: './investment-results.component.css',
})
export class InvestmentResultsComponent {
  // Could also use the input<InvestmentOutput>() function.
  @Input({ required: true }) results?: InvestmentOutput[];
}
