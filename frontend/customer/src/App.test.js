import React from 'react';
import ReactDOM from 'react-dom';
import { CustomerComponent } from './container/customer/CustomerInfo';

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<CustomerComponent />, div);
  ReactDOM.unmountComponentAtNode(div);
});
