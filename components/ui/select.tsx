'use client';

import { cn } from '@heroui/react';
import { SelectHTMLAttributes, forwardRef, useState } from 'react';

interface SelectProps extends SelectHTMLAttributes<HTMLSelectElement> {
  label?: string;
  className?: string;
  startContent?: React.ReactNode;
  endContent?: React.ReactNode;
  options?: Array<{
    value: string | number;
    label: string;
  }>;
}

const Select = forwardRef<HTMLSelectElement, SelectProps>(
  (
    { label, className, startContent, endContent, options = [], ...props },
    ref
  ) => {
    const [isFocused, setIsFocused] = useState(false);
    const hasValue = props.value !== undefined && props.value !== '';

    return (
      <div className="relative flex flex-col">
        <div className="relative">
          {startContent && (
            <div className="absolute left-4 top-[60%] z-10 -translate-y-1/2">
              {startContent}
            </div>
          )}
          <select
            ref={ref}
            className={cn(
              'w-full appearance-none px-4 py-6 pb-3 font-bold',
              'rounded-small border border-foreground-200 transition-all hover:border-accent hover:shadow-[0_0_0_4px_inset] hover:shadow-accent focus:outline-none',
              startContent ? 'pl-8' : '',
              endContent ? 'pr-8' : '',
              className
            )}
            onFocus={() => setIsFocused(true)}
            onBlur={() => setIsFocused(false)}
            {...props}
          >
            {options.map((option) => (
              <option key={option.value} value={option.value}>
                {option.label}
              </option>
            ))}
          </select>
          {endContent ? (
            <div className="pointer-events-none absolute right-4 top-[60%] -translate-y-1/2">
              {endContent}
            </div>
          ) : (
            <div className="pointer-events-none absolute right-4 top-[60%] -translate-y-1/2">
              <svg
                width="24"
                height="24"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path d="M7 9.5L12 14.5L17 9.5H7Z"></path>
              </svg>
            </div>
          )}
          {label && (
            <label
              className={cn(
                'absolute left-4 transition-all duration-200',
                isFocused || hasValue || startContent
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

Select.displayName = 'Select';

export default Select;
