import React from 'react';
import ReactDOM from 'react-dom';
import ReviewPageMain from './ReviewPageMain';
import renderer from 'react-test-renderer';

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<ReviewPageMain />, div);
  ReactDOM.unmountComponentAtNode(div);
});
it('renders the UI as expected', () => {
    const tree = renderer
      .create(<ReviewPageMain name="ReviewPageMain"/>)
      .toJSON();
    expect(tree).toMatchSnapshot();  
    });