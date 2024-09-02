import React from 'react';
import { render } from '@testing-library/react';
import App from "./App";


test('MyComponent matches snapshot', () => {
  const appjs =render(<App/>)
  expect(appjs).toMatchSnapshot();
});
