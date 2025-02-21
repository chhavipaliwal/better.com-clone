'use client';
import Calculator from './calculator';
import CalculatorUsage from './calculator-usage';
import { CalculatorProvider } from './context';
import MoreInfo from './more-info';
import PaymentBreakdown from './payment-breakdown';

export default function MortgageCalculator() {
  return (
    <CalculatorProvider>
      <Calculator />
      <PaymentBreakdown />
      <MoreInfo />
      <CalculatorUsage />
    </CalculatorProvider>
  );
}
