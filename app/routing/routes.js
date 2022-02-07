/**
 * @author Amusoftech <er.amudeep@gmail.com>
 * @description List of routes for Tabs Navigator and Stack navigator, Along addational  Option for Tabs
 */
import React from 'react';
import { View } from 'react-native';
import * as Animatable from 'react-native-animatable';
import { scale } from 'react-native-size-matters';
import Home from '../screens/Home';
import Search from '../screens/Search';
import Contacts from '../screens/Contacts';
import Call from '../screens/Call';
import Schedule from '../screens/Schedule';


import MaterialIcons from 'react-native-vector-icons/dist/MaterialIcons';
import OnBoarding from '../screens/OnBoarding';
import {appColors} from '../utils/appColors';

export const RoutesList = [
  /* {
    name: 'OnBoarding',
    component: OnBoarding,
    options: {
      tabBarBadge: 3,
      tabBarLabel: 'OnBoarding',
      tabBarButton:()=>null
      //.... rest are the params for Tab.Screen See : https://reactnavigation.org/docs/bottom-tab-navigator/#options
    },
  },
 */

  {
    name: 'Home',
    component: Home,
    options: { 
      tabBarLabel:()=> null, 
      tabBarIcon: (props) => <CustomIcon props={props} iconName="home" />,
    },
  },

  {
    name: 'Search',
    component: Search,
    options: {  
      tabBarButton: ()=>null,
    },
  },

  {
    name: 'Contacts',
    component: Contacts,
    options: { 
      tabBarLabel:()=> null, 
      tabBarIcon: (props) => <CustomIcon props={props} iconName="people-outline" />,
    },
  }, 
  {
    name: 'Call',
    component: Call,
    options: {  
      tabBarButton: ()=>null,
    },
  }, 
  

  {
    name: 'Schedule',
    component: Schedule,
    options: { 
      tabBarLabel:()=> null, 
      tabBarIcon: (props) => <CustomIcon props={props} iconName="event" />,
    },
  }, 
  
  
];




const CustomIcon = ({ props, iconName, animationProps }) => {
  const { focused } = props 
  return (
    <Animatable.View
      {...animationProps}
      style={{
        padding: scale(10),
        height: scale(70),
        width: scale(70),
        justifyContent:
          /* Platform.OS === 'android' ? 'flex-start' :  */ 'center',
        alignItems: 'center',
        // borderRadius: scale(50),
        //backgroundColor:appColors.white
      }}>
      <View
        style={[{
          borderRadius: scale(20),
        }, focused ? {} : { opacity: scale(0.4) }]}>
        <MaterialIcons
          name={iconName ? iconName : 'home'}
          size={scale(32)} /* color={appColors.white} */
          {...props}
          
        />
      </View>
    </Animatable.View>
  );
};
