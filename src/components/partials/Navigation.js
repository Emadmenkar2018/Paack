import React, { useEffect } from "react";
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Home from "@pages/Home";
import DeliveryDetails from "@pages/DeliveryDetails";
import { useSelector } from 'react-redux';
import { Alert } from "react-native";


const HomeStack = createNativeStackNavigator();


const HomeStackNavigator = () => {

  const { error } = useSelector(state => state.deliveries);


  /**
   * Render Delivery item inside FLatList
   * 
   * @param {object} item
   * @param {String} index
  */
  useEffect(() => {
    if (error) {
      Alert.alert('Something Wrong')
    }
  }, [error])

  return (
    <HomeStack.Navigator testID="nav" mode="modal" initialRouteName="Home">
      <HomeStack.Screen
        name="Home"
        component={Home}
        options={({ route, navigation }) => ({
          headerShown: false,
        })}
      />
      <HomeStack.Screen
        name="DeliveryDetails"
        component={DeliveryDetails}
        options={({ route, navigation }) => ({
          headerShown: false,
        })}
      />
    </HomeStack.Navigator>
  );
}

// const Stack = {
//   Login: { screen: Login },
//   Dashboard: { screen: Dashboard },
// };


// const Navigation = createStackNavigator(
//   {
//     //you can add drawer here ,
//     ...Stack
//   },
//   {
//     headerMode: "none", 
//     backBehavior: "none",
//     navigationOptions: {
//       gesturesEnabled: false
//     } 
//   }
// );

// const LoginStack = createStackNavigator(
//   {
//     loginScreen: { screen: Login }
//   },
//   {
//     // headerMode: 'float',
//     // navigationOptions: {
//     //     headerStyle: {backgroundColor: '#E73536'},
//     //     title: 'You are not logged in',
//     //     headerTintColor: 'white'
//     // }
//     headerMode: "none"
//   }
// );

// const PrimaryNav = createStackNavigator(
//   {
//     loginStack: { screen: Login },
//     appScreensStack: { screen: HomeStackNavigator }
//   },
//   {
//     // Default config for all screens
//     headerMode: "none",
//     // title: 'Main',
//     initialRouteName: "loginStack"
//   }
// );

export default HomeStackNavigator;