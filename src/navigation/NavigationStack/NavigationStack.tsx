import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';

// Mics Methods
import {Screens} from '../../utils/theme';
import TabNavigation from '../TabNavigation/TabNavigation';

// Variables
const NavStack = createStackNavigator();

// Main Function Component
const NavigationStack = () => {
    // render Methods
    return (
        <NavStack.Navigator
            screenOptions={{
                headerShown: false,
            }}
            initialRouteName={Screens.Tab}
        >
            <NavStack.Screen name={Screens.Tab} component={TabNavigation} />
        </NavStack.Navigator>
    );
};

export default NavigationStack;
