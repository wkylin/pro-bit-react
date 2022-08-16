import React, { version, ReactNode } from 'react';

export type SaleChargeProps = {
  children?: ReactNode;
};

export function SaleCharge({ children }: SaleChargeProps) {
  return (
    <>
      <div>
        { children }
      </div>
      <div>
        React:
        { version }
      </div>
    </>
  );
}
