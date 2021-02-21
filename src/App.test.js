import React from 'react';
import { render } from '@testing-library/react';
import App from './App';
import {simpleCalculation, compareTwoNumbers} from '../src/utils/utils';

test('renders learn react link', () => {
  const { getByText } = render(<App />);
  const linkElement = getByText(/Изучаем реакт/i);
  expect(linkElement).toBeInTheDocument();
});


it('calculation works', () => {
    expect(simpleCalculation(4,10)).toEqual(14);
    expect(simpleCalculation(NaN,10)).toContain('Одно из значений или оба не числа');
});
it('compareTwoNumbers', () => {
  expect(compareTwoNumbers(4,5)).toEqual(5);
  expect(compareTwoNumbers(5,4)).toEqual(5);
  expect(compareTwoNumbers(-4,-5)).toEqual(-4);
  expect(compareTwoNumbers(-5,-4)).toEqual(-4);
  expect(compareTwoNumbers(-5,-5)).toEqual(-5);
  expect(compareTwoNumbers(4,4)).toEqual(4);
  expect(compareTwoNumbers(0,4)).toEqual(4);
  expect(compareTwoNumbers(4,0)).toEqual(4);
  expect(compareTwoNumbers(-4,0)).toEqual(0);
  expect(compareTwoNumbers(0,-4)).toEqual(0);
  expect(compareTwoNumbers(5,-5)).toEqual(5);
  expect(compareTwoNumbers(-5,4)).toEqual(4);
});