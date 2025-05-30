import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';

// Mics Methods
import {Screens} from '../../utils/theme';
import TabNavigation from '../TabNavigation/TabNavigation';
import ProductScreen from '../../container/TabBar/Categories/ProductScreen/ProductScreen';
import ProductDetailsScreen from '../../container/TabBar/Categories/ProductDeatlis/ProductDeatlisScreen';
import OrderPlaceScreen from '../../container/TabBar/Profile/Order/OrderPlaceScreen';

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
            <NavStack.Screen name={Screens.ProductScreen} component={ProductScreen} />
            <NavStack.Screen name={Screens.ProductDetailsScreen} component={ProductDetailsScreen} />
            <NavStack.Screen name={Screens.OrderPlaceScreen} component={OrderPlaceScreen}/>
        </NavStack.Navigator>
    );
};

export default NavigationStack;
