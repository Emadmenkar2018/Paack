/**
 * @format
 */

 import 'react-native';
 import React from 'react';
 import PaackButton from './index';
 import { act, render, cleanup } from '@testing-library/react-native';
 import MockedNavigator from '../../../../__mocks__/MockedNavigator'
  
 
 describe('renders PaackBackbtn ', () => {
    
     it("Must Render Correctly", () => {
         const wrapper = render(
             <MockedNavigator component={PaackButton} />
             
         );
         expect(wrapper.toJSON().children.length).toBe(1);
 
         // expect(mockedDispatch).toHaveBeenCalledWith(DrawerActions.toggleDrawer());
     });
 
 
    
 });
 