  import React from 'react';
import ReactDOM from 'react-dom';
import AddReview from './AddReview';
import renderer from 'react-test-renderer';

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<AddReview />, div);
  ReactDOM.unmountComponentAtNode(div);
});
it('renders the UI as expected', () => {
    const tree = renderer
      .create(<AddReview name="AddReview"/>)
      .toJSON();
    expect(tree).toMatchSnapshot();  
    });