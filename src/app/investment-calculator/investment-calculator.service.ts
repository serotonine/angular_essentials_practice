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
  private _userInput = {} as InvestmentInput;

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
    // Destructuring the Object (less verbose code).
    const { initial_invest, duration, expected_return, annual_invest } =
      this._userInput;
    this._investmentValue = initial_invest;

    for (let i = 0; i < duration; i++) {
      const year = i + 1;
      const interestEarnedInYear =
        this._investmentValue * (expected_return / 100);
      this._investmentValue += interestEarnedInYear + annual_invest;
      const totalInterest =
        this._investmentValue - annual_invest * year - initial_invest;
      this._annualData.push({
        year: year,
        interest: interestEarnedInYear,
        valueEndOfYear: this._investmentValue,
        annualInvestment: annual_invest,
        totalInterest: totalInterest,
        totalAmountInvested: initial_invest + annual_invest * year,
      });
    }

    return this._annualData;
  }
}
