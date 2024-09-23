export interface InvestmentInput {
  initial_invest: 0;
  annual_invest: 0;
  expected_return: 0;
  duration: 0;
}
export interface InvestmentOutput {
  year: number;
  interest: number;
  valueEndOfYear: number;
  annualInvestment: number;
  totalInterest: number;
  totalAmountInvested: number;
}
