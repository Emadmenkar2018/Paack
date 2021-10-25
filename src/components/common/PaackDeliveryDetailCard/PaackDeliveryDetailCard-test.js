/**
 * @format
 */

 import 'react-native';
 import React from 'react';
 import PaackDeliveryDetailCard from './index';
 import { act, render, cleanup } from '@testing-library/react-native';
 import MockedNavigator from '../../../../__mocks__/MockedNavigator'
  
 
 describe('renders PaackDeliveryDetailCard ', () => {

    var item = {
        activated: true,
        customer:'Mock Customer',
        city : 'Mock City',
      };
    
     it("Must Render Correctly", () => {
         const wrapper = render(
             <MockedNavigator component={()=><PaackDeliveryDetailCard item={item}/>} />
             
         ); 
         expect(wrapper.queryByTestId('PaackDeliveryDetailCard')).toBeTruthy();
     });
 });
 