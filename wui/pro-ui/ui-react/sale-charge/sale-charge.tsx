import React, {version, ReactNode } from 'react';

export type SaleChargeProps = {
  /**
   * a node to be rendered in the special component.
   */
  children?: ReactNode;
};

export function SaleCharge({ children }: SaleChargeProps) {
  return (
    <>
    <div>
      {children}
    </div>
    <div>
      React: {version}
    </div>
    </>
  );
}
