// import mockAsyncStorage from '@react-native-async-storage/async-storage/jest/async-storage-mock';
// import RNShake from 'react-native-shake';
import 'react-native-gesture-handler/jestSetup';

// jest.mock('@react-native-async-storage/async-storage', () => mockAsyncStorage);

jest.mock(
  './node_modules/react-native/Libraries/EventEmitter/NativeEventEmitter',
);


jest.mock('react-native-reanimated', () => {
  const Reanimated = require('react-native-reanimated/mock');

  // The mock for `call` immediately calls the callback which is incorrect
  // So we override it with a no-op
  Reanimated.default.call = () => {};

  return Reanimated;
});

// Silence the warning: Animated: `useNativeDriver` is not supported because the native animated module is missing
jest.mock('react-native/Libraries/Animated/NativeAnimatedHelper');

// jest.mock('react-native-shake', () => RNShake);

jest.mock("@react-navigation/native", () => {
  const actualNav = jest.requireActual("@react-navigation/native");
  return {
    ...actualNav,
    useNavigation: () => ({
      navigate: jest.fn(),
      dispatch: jest.fn(),
    }),
    // useRoute: () => ({
    //   params: {
    //     deliveryData: {id:"1", name:"Mock Name",city:"Mock City",latitude:'1231',longitude:'1213'}, 
    //   }
    // }),
  };
});