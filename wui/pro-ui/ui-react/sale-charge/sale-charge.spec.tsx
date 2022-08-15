import React from 'react';
import { render } from '@testing-library/react';
import { BasicSaleCharge } from './sale-charge.composition';

it('should render with the correct text', () => {
  const { getByText } = render(<BasicSaleCharge />);
  const rendered = getByText('hello world!');
  expect(rendered).toBeTruthy();
});
