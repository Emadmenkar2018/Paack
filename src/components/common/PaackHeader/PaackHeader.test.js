
 import 'react-native';
 import React from 'react';
 import PaackHeader from './index';
 import { act, render, cleanup } from '@testing-library/react-native';
 import MockedNavigator from '../../../../__mocks__/MockedNavigator'
  
 
 describe('renders PaackBackbtn ', () => { 
    
     it("Must Render Correctly", () => {
         const wrapper = render(
             <MockedNavigator component={PaackHeader} />
             
         ); 
         expect(wrapper.queryByTestId('PaackHeader')).toBeTruthy();
     });
 });