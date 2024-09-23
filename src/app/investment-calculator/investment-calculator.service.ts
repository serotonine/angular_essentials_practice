import { Injectable } from '@angular/core';
import {
  InvestmentInput,
  InvestmentOutput,
} from './investment-calculator.model';
@Injectable({
  providedIn: 'root',
})
export class InvestmentCalculatorService {
  private _investmentValue!: number;
  private _annualData: InvestmentOutput[] = [];
  _userInput = {} as InvestmentInput;

  setUserInput(userInput: InvestmentInput) {
    this._userInput = userInput;
  }
  getUserInput() {
    return this._userInput;
  }
  reset() {
    this._annualData = [];
  }

  calculateInvestmentResults() {
    this.reset();
    this._investmentValue = this._userInput.initial_invest;

    for (let i = 0; i < this._userInput.duration; i++) {
      const year = i + 1;
      const interestEarnedInYear =
        this._investmentValue * (this._userInput.expected_return / 100);
      this._investmentValue +=
        interestEarnedInYear + this._userInput.annual_invest;
      const totalInterest =
        this._investmentValue -
        this._userInput.annual_invest * year -
        this._userInput.initial_invest;
      this._annualData.push({
        year: year,
        interest: interestEarnedInYear,
        valueEndOfYear: this._investmentValue,
        annualInvestment: this._userInput.annual_invest,
        totalInterest: totalInterest,
        totalAmountInvested:
          this._userInput.initial_invest + this._userInput.annual_invest * year,
      });
    }

    return this._annualData;
  }
}
