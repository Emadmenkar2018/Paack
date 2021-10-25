
 import 'react-native';
 import React from 'react';
 import PaackText from './index';
 import { act, render, cleanup } from '@testing-library/react-native';
 import MockedNavigator from '../../../../__mocks__/MockedNavigator'
  
 
 describe('renders PaackText ', () => { 
    
     it("Must Render Correctly", () => {
         const wrapper = render(
             <PaackText />
             
         ); 
         expect(wrapper.queryByTestId('PaackText')).toBeTruthy();
     });
 });