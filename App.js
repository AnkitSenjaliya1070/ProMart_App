import React, {Fragment, useEffect, useState} from 'react';
import {LogBox, Platform, SafeAreaView, StatusBar} from 'react-native';
import KeyboardManager from 'react-native-keyboard-manager';
import {NavigationContainer} from '@react-navigation/native';
import {navigationContainerRef} from './src/navigation/RootStack/helpers';
// screen
import {Colors} from './src/utils/theme';
import RootStack from './src/navigation/RootStack';

export default function App() {
    const [routeName, setRouteName] = useState('');
    // Variables
    useEffect(() => {
        LogBox.ignoreAllLogs();
        if (Platform.OS === 'ios') {
            KeyboardManager.setEnable(true);
            KeyboardManager.setEnableDebugging(true);
            KeyboardManager.setKeyboardDistanceFromTextField(15);
            KeyboardManager.setLayoutIfNeededOnUpdate(true);
            KeyboardManager.setEnableAutoToolbar(true);
            KeyboardManager.setToolbarDoneBarButtonItemText('Done');
            KeyboardManager.setShouldToolbarUsesTextFieldTintColor(false);

            KeyboardManager.setToolbarManageBehaviourBy('position'); // "subviews" | "tag" | "position"
            KeyboardManager.setToolbarPreviousNextButtonEnable(true);

            KeyboardManager.setToolbarTintColor(Colors.themeColor); // Only #000000 format is supported
            KeyboardManager.setToolbarBarTintColor(Colors.background); // Only #000000 format is supported
            KeyboardManager.setShouldShowToolbarPlaceholder(false);
            KeyboardManager.setOverrideKeyboardAppearance(true);
            KeyboardManager.setShouldResignOnTouchOutside(true);
            KeyboardManager.setKeyboardAppearance('light'); // "default" | "light" | "dark"
            KeyboardManager.resignFirstResponder();
            KeyboardManager.setShouldPlayInputClicks(true);
            KeyboardManager.reloadLayoutIfNeeded();
            KeyboardManager.isKeyboardShowing().then((isShowing) => {
                // ...
                console.log('isShowing', isShowing);
            });
        }
        // Clean up the subscription when the component unmounts
        return () => {
            navigationContainerRef.current?.removeListener('state', handleNavigationStateChange);
        };
    }, []);

    const handleNavigationStateChange = () => {
        const route = navigationContainerRef.getCurrentRoute()?.name;
        if (route) {
            setRouteName(route);
        }
    };

    // render Methods
    return (
        <Fragment>
            <>
                <StatusBar backgroundColor={Colors.white} barStyle={'dark-content'} />
                {/* <SafeAreaView style={{flex: 0, backgroundColor: Colors.transparent}} /> */}
            </>
                <NavigationContainer
                    ref={navigationContainerRef}
                    onStateChange={handleNavigationStateChange}
                >
                    <RootStack />
                </NavigationContainer>
        </Fragment>
    );
}
