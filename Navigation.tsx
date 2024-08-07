import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Ionicons from 'react-native-vector-icons/Ionicons';

import AboutScreen from './screens/AboutScreen';
import UploadImageScreen from './screens/UploadImageScreen';
import AlbumScreen from './screens/AlbumScreen';
import LoginScreen from './screens/LoginScreen'; // Import the LoginScreen
import { RouteProp } from '@react-navigation/native';
import { ParamListBase } from '@react-navigation/routers';

const Tab = createBottomTabNavigator();

type TabScreenRouteProp = RouteProp<ParamListBase, string>;

type TabNavigationProp = {
  route: TabScreenRouteProp;
};

type Props = {
  navigation: TabNavigationProp;
};

const AppNavigation = ({ navigation }: Props) => {
  return (
    <NavigationContainer>
      <Tab.Navigator
        screenOptions={({ route }) => ({
          tabBarIcon: ({ focused, color, size }) => {
            let iconName: string;

            if (route.name === 'Gallery') {
              iconName = focused ? 'ios-images' : 'ios-images-outline';
            } else if (route.name === 'Upload') {
              iconName = focused ? 'ios-camera' : 'ios-camera-outline';
            } else if (route.name === 'About') {
              iconName = focused ? 'ios-information-circle' : 'ios-information-circle-outline';
            } else {
              iconName = 'ios-information-circle';
            }

            return <Ionicons name={iconName} size={size} color={color} />;
          },
          tabBarOptions: {
            activeTintColor: 'blue',
            inactiveTintColor: 'gray',
          },
          tabBarStyle: {
            display: route.name === 'Login' ? 'none' : 'flex', // Hide tab bar for login screen
          },
        })}
      >
        <Tab.Screen
          name="Login"
          component={LoginScreen}
          options={{
            tabBarLabel: 'Login',
          }}
        />
        <Tab.Screen
          name="Gallery"
          component={AlbumScreen}
          options={{
            tabBarLabel: 'Album',
          }}
        />
        <Tab.Screen
          name="Upload"
          component={UploadImageScreen}
          options={{
            tabBarLabel: 'Upload Image',
          }}
        />
        <Tab.Screen
          name="About"
          component={AboutScreen}
          options={{
            tabBarLabel: 'About',
          }}
        />
      </Tab.Navigator>
    </NavigationContainer>
  );
};

export default AppNavigation;
