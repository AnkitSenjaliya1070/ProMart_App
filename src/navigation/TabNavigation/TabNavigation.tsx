import React from 'react';
import {Platform} from 'react-native';
import {hasNotch} from 'react-native-device-info';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';

import {TabNavigationParamList, TabNavigationScreens} from './TabNavigation.types';
// Components
import {Colors, Images} from '../../utils/theme';
import HomeScreen from '../../container/TabBar/Home/HomeScreen';
import TabBarIcon from '../../components/TabBarIcon/TabBarIcon';
import CategoriesScreen from '../../container/TabBar/Categories/CategoriesScreen';
import OffersScreen from '../../container/TabBar/Offers/OffersScreen';
import WishlistScreen from '../../container/TabBar/Wishlist/WishlistScreen';
import CartScreen from '../../container/TabBar/Cart/CartScreen';

// Mics Constants

const TabNavigator = createBottomTabNavigator<TabNavigationParamList>();

export default function TabNavigation() {
    // render Method
    return (
        <TabNavigator.Navigator
            initialRouteName={TabNavigationScreens.Home}
            screenOptions={({route}) => ({
                tabBarShowLabel: false,
                headerShown: false,
                tabBarContentContainerStyle: {
                    backgroundColor: 'transparent',
                },
                tabBarStyle: {
                    height: hasNotch() ? 90 : 65,
                    backgroundColor: Colors.white,
                    borderTopWidth: 0,
                    position: 'absolute',
                    ...Platform.select({
                        ios: {
                            shadowColor: '#000',
                            shadowOffset: {
                                width: 0,
                                height: -3,
                            },
                            shadowOpacity: 0.08,
                            shadowRadius: 24,
                        },
                        android: {
                            elevation: 24,
                        },
                    }),
                },
                // eslint-disable-next-line react/no-unstable-nested-components
                tabBarIcon: ({size, focused}) => {
                    let iconName, tabName;
                    if (route.name === TabNavigationScreens.Home) {
                        iconName = Images.homeIcon; 
                        tabName = 'Home';
                    } else if (route.name === TabNavigationScreens.Categories) {
                        iconName = Images.categoriesIcon; 
                        tabName = 'Categories';
                    } else if (route.name === TabNavigationScreens.Offers) {
                        iconName = Images.offersIcon; 
                        tabName = 'Offers';
                    } else if (route.name === TabNavigationScreens.Wishlist) {
                        iconName = Images.wishlistIcon; 
                        tabName = 'Wishlist';
                    } else if (route.name === TabNavigationScreens.Cart) {
                        iconName = Images.cartIcon; 
                        tabName = 'Cart';
                    }
                    return (
                        <TabBarIcon
                            imageName={iconName}
                            size={size}
                            color={focused ? Colors.redED : Colors.black}
                            focused={focused}
                            labelText={tabName}
                        />
                    );
                },
            })}
        >
            <TabNavigator.Screen name={TabNavigationScreens.Home} component={HomeScreen} />
            <TabNavigator.Screen name={TabNavigationScreens.Categories} component={CategoriesScreen}/>
            <TabNavigator.Screen name={TabNavigationScreens.Offers} component={OffersScreen}/>
            <TabNavigator.Screen name={TabNavigationScreens.Wishlist} component={WishlistScreen}/>
            <TabNavigator.Screen name={TabNavigationScreens.Cart} component={CartScreen}/>
        </TabNavigator.Navigator>
    );
}
