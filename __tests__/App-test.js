/**
 * @format
 */

import 'react-native';
import React from 'react';
import App from '../App';
import { act, render, cleanup } from '@testing-library/react-native';
// import {create, act} from 'react-test-renderer';
// Note: test renderer must be required after react-native.
// import renderer from 'react-test-renderer';

it('renders correctly', () => {
  const wrapper = render(
    <App />,
  );
  // console.log('wrapper.toJSON()dsf',wrapper.toJSON().length).toBe(2)
  expect(wrapper.toJSON().length).toBe(2); 
});
