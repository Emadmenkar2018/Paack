
 import 'react-native';
 import React from 'react';
 import PaackList from './index';
 import PaackDeliveryItem from '../PaackDeliveryItem'
 import { act, render, cleanup } from '@testing-library/react-native';
 import MockedNavigator from '../../../../__mocks__/MockedNavigator'
  
 const mockDataTodos = [
    {
      id: 'id-1',
      name: 'Todo-1',
    },
    {
      id: 'id-2',
      name: 'Todo-2',
    },
    {
      id: 'id-3',
      name: 'Todo-3',
    },
  ]
  
  
 
 describe('renders PaackList ', () => { 
    
     it("Must Render Correctly", () => {
    //      const wrapper = render(
    //          <MockedNavigator   component={()=><PaackList renderItem={PaackDeliveryItem} data={mockDataTodos}/>}  />
    //      ); 
    //      expect(wrapper.queryByTestId('PaackList')).toBeTruthy();
     });

    //  it('should display as a ListItem', () => {
    //     const wrapper = shallow(<renderItem item={item} />);
    //     expect(wrapper.find(ListItem).length).toEqual(1);
    // });
 });