import React from 'react';
import { render } from '@testing-library/react';
import QuizPage from './QuizPage';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';

it('renders without crashing', () => {
  const div = document.createElement('div');

  ReactDOM.render(
    <BrowserRouter>
      <QuizPage/>
    </BrowserRouter>, div);

  ReactDOM.unmountComponentAtNode(div);
});