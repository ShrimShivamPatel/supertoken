'use client';

import * as React from 'react';
import { cn } from '@/lib/utils';
import { Label } from '@/components/ui/label';
import { forwardRef, useMemo } from 'react';
import { FieldError } from 'react-hook-form';

const typePlaceholderMap: Record<string, string> = {
  currency: '0.00',
  percentage: '0.00',
};

export type TextInputProps = {
  type?: 'currency' | 'percentage' | HTMLInputElement['type'];
  label?: string;
  note?: string;
  prefix?: React.ReactNode;
  suffix?: React.ReactNode;
  error?: FieldError;
  wrapperClassName?: string;
  inpurtContainerWrapperClassName?: string;
  ghost?: boolean;
  underline?: boolean;
  secondaryLabel?: React.ReactNode;
} & Omit<React.InputHTMLAttributes<HTMLInputElement>, 'prefix' | 'suffix'>;

export const Input = forwardRef<HTMLInputElement, TextInputProps>(
  (
    {
      type = 'text',
      label,
      note,
      prefix,
      suffix,
      className,
      placeholder,
      error,
      wrapperClassName,
      inpurtContainerWrapperClassName,
      ghost,
      underline,
      secondaryLabel = null,
      ...otherProps
    },
    ref,
  ) => {
    return (
      <div className={cn('w-full', wrapperClassName)}>
        <div
          className="
            text-sm font-semibold
            flex items-center justify-between 
            "
        >
          {label && (
            <Label className={cn('block mb-1', error?.message ? 'text-red-600' : 'text-gray-600')}>{label}</Label>
          )}
          {secondaryLabel && (
            <Label className={cn('block mb-1', error?.message ? 'text-red-600' : 'text-gray-600')}>
              {secondaryLabel}
            </Label>
          )}
        </div>

        <div
          className={cn(
            'relative flex flex-row items-center',
            ghost ? 'border-0' : underline ? 'border-b' : 'rounded-md border border-input shadow-xs',
            !!error
              ? 'border-red-300 focus-within:border-red-400 focus-within:ring-red-400'
              : 'border-gray-300 focus-within:border-gray-500 focus-within:ring-gray-500',
            ghost || (underline && otherProps.disabled) ? '' : otherProps.disabled ? 'bg-gray-100' : 'bg-background',
            inpurtContainerWrapperClassName,
          )}
        >
          {prefix && (
            <div className="pointer-events-none flex shrink-0 items-center text-gray-500 ps-2.5 sm:text-sm">
              {prefix}
            </div>
          )}
          {/*  */}

          <input
            type={type}
            data-slot="input"
            className={cn(
              'file:text-foreground placeholder:text-muted-foreground selection:bg-primary selection:text-primary-foreground flex h-9 w-full min-w-0 rounded-md  bg-transparent px-3 py-1 text-base  transition-[color,box-shadow] outline-none file:inline-flex file:h-7 file:border-0 file:bg-transparent file:text-sm file:font-medium disabled:pointer-events-none disabled:cursor-not-allowed disabled:opacity-50 md:text-sm',

              'aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40 aria-invalid:border-destructive',
              ghost || (underline && !otherProps.disabled)
                ? 'bg-transparent'
                : otherProps.disabled
                ? 'bg-gray-100'
                : 'bg-background',
              className,
            )}
            placeholder={placeholder || typePlaceholderMap[type]}
            ref={ref}
            {...otherProps}
            step={'any'}
          />

          {suffix && (
            <div className="pointer-events-none flex shrink-0 items-center text-gray-500 pe-2.5 sm:text-sm">
              {suffix}
            </div>
          )}
        </div>

        <div className="text-sm">
          {note && <p className="mt-1 text-gray-500 font-medium">{note}</p>}
          {error?.message && <p className="mt-1 text-red-600 font-semibold">{error.message}</p>}
        </div>
      </div>
    );
  },
);