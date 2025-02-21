'use client';

import { cn } from '@heroui/react';
import { InputHTMLAttributes, forwardRef, useState } from 'react';

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  label?: string;
  className?: string;
  startContent?: React.ReactNode;
  endContent?: React.ReactNode;
}

const Input = forwardRef<HTMLInputElement, InputProps>(
  ({ label, className, startContent, endContent, ...props }, ref) => {
    const [isFocused, setIsFocused] = useState(false);
    const hasValue = props.value !== undefined && props.value !== '';

    return (
      <div className="relative flex flex-col">
        <div className="relative">
          {startContent && (
            <div
              className={cn(
                'absolute left-4 -translate-y-1/2',
                label ? 'top-[60%]' : 'top-1/2'
              )}
            >
              {startContent}
            </div>
          )}
          <input
            ref={ref}
            className={cn(
              'w-full px-4 py-6 pb-3 font-bold',
              'rounded-small border border-foreground-200 transition-all hover:border-accent hover:shadow-[0_0_0_4px_inset] hover:shadow-accent focus:outline-none',
              startContent ? 'pl-8' : '',
              endContent ? 'pr-8' : '',
              className
            )}
            onFocus={() => setIsFocused(true)}
            onBlur={() => setIsFocused(false)}
            {...props}
          />
          {endContent && (
            <div className="absolute right-4 top-[60%] -translate-y-1/2">
              {endContent}
            </div>
          )}
          {label && (
            <label
              className={cn(
                'absolute left-4 transition-all duration-200',
                isFocused || hasValue || startContent || endContent
                  ? 'top-2 px-1 text-xs'
                  : 'top-1/2 -translate-y-1/2 text-sm text-foreground-400'
              )}
            >
              {label}
            </label>
          )}
        </div>
      </div>
    );
  }
);

Input.displayName = 'Input';

export default Input;
