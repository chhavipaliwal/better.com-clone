'use client';
import React, { createContext, useContext } from 'react';
import { useFormik } from 'formik';

interface InputForm {
  homePrice: number;
  zipCode: string;
  downPayment: number;
  downPaymentRatio: number;
  interestRate: number;
  loanLength: number;
  monthlyPayment: number;
}

interface FormContextType {
  formik: ReturnType<typeof useFormik<InputForm>>;
}

const FormContext = createContext<FormContextType | undefined>(undefined);

export const CalculatorProvider = ({
  children
}: {
  children: React.ReactNode;
}) => {
  const formik = useFormik<InputForm>({
    initialValues: {
      homePrice: 0,
      zipCode: '',
      downPayment: 0,
      downPaymentRatio: 0,
      interestRate: 0,
      loanLength: 0,
      monthlyPayment: 0
    },
    onSubmit: async (values) => {
      console.log(values);
    }
  });

  return (
    <FormContext.Provider value={{ formik }}>{children}</FormContext.Provider>
  );
};

export const useCalculator = () => {
  const context = useContext(FormContext);
  if (!context) {
    throw new Error('useCalculator must be used within a FormProvider');
  }
  return context;
};
