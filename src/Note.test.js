import React from 'react';
import { render } from '@testing-library/react';
import Note from './Note';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';

it('renders without crashing', () => {
  const div = document.createElement('div');

  ReactDOM.render(
    <BrowserRouter>
      <Note />
    </BrowserRouter>, div);

  ReactDOM.unmountComponentAtNode(div);
});