/**
 * @format
 */

import 'react-native';
import React from 'react';
import DeliveryDetails from './index';
import { act, render, cleanup, } from '@testing-library/react-native';
// import {create, act} from 'react-test-renderer';
// Note: test renderer must be required after react-native.
// import renderer from 'react-test-renderer';
import MockedNavigator from '../../../../__mocks__/MockedNavigator'
import { Provider } from 'react-redux'
import configureStore from 'redux-mock-store'

describe('With React Testing Library', () => {
    const initialState = { deliveries: [{ id: "1", name: "Mock Name", city: "Mock City" }] }
    const mockStore = configureStore()
    let store
    const deliveryData ={ route : {params :{ deliveryData: {id:"1", name:"Mock Name",city:"Mock City",latitude:'1231',longitude:'1213'}}}}

    it('renders DeliveryDetails correctly', () => {
        store = mockStore(initialState)
        const wrapper = render(
            <Provider store={store}>
                <MockedNavigator component={() => <DeliveryDetails deliveryData={deliveryData} />} />
            </Provider >
        );
        // console.log('wrapper', wrapper)
        expect(wrapper.toJSON().children.length).toBe(1);
    });
})
