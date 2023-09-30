import React, { useEffect } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import * as Font from 'expo-font';


import HomeScreen from './Screens/Home';
import LoginScreen from './Screens/Login';

const Stack = createStackNavigator();

export default function App() {
    useEffect(() => {
        async function loadFonts() {
            await Font.loadAsync({
                'inter-regular': require('./assets/fonts/Inter.ttf'),
            });
        }

        loadFonts();
    }, []);

    return ( < NavigationContainer >
        <
        stack.Navigator initialRouteName = "Home" >
        <
        Stack.Screen name = "Home"
        component = { HomeScreen }
        />  <
        Stack.Screen name = "Login"
        component = { LoginScreen }
        />  <
        /stack.Navigator>  <
        /NavigationContainer>
    );
}