/**
 * @format
 */

import 'react-native';
import React from 'react';
import Home from './index';
import { act, render, cleanup } from '@testing-library/react-native';
// import {create, act} from 'react-test-renderer';
// Note: test renderer must be required after react-native.
// import renderer from 'react-test-renderer';
import MockedNavigator from '../../../../__mocks__/MockedNavigator'
import { Provider } from 'react-redux'
import configureStore from 'redux-mock-store'

describe('With React Testing Library', () => {
    const initialState = { deliveries: [{ id: "1", name: "Mock Name", city: "Mock City" }] }
    const mockStore = configureStore()
    let store, wrapper

    it('renders correctly', () => {
        store = mockStore(initialState)
        const wrapper = render(
            <Provider store={store}>
                <MockedNavigator component={() => <Home />} />
            </Provider >
        );
        expect(wrapper.toJSON().children.length).toBe(1);
    });
})
