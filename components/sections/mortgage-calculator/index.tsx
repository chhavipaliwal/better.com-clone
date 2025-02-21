'use client';
import Calculator from './calculator';
<<<<<<< HEAD
import CalculatorUsage from './calculator-usage';
=======
import { CalculatorProvider } from './context';
import MoreInfo from './more-info';
import PaymentBreakdown from './payment-breakdown';
>>>>>>> 022a6f3 (Add mortgage calculator context, payment breakdown, and more info sections)

export default function MortgageCalculator() {
  return (
    <CalculatorProvider>
      <Calculator />
<<<<<<< HEAD
      <CalculatorUsage />
    </>
=======
      <PaymentBreakdown />
      <MoreInfo />
    </CalculatorProvider>
>>>>>>> 022a6f3 (Add mortgage calculator context, payment breakdown, and more info sections)
  );
}
