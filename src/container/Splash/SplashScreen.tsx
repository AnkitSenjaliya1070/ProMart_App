import React, {useEffect} from 'react';

// Mics Constants
import {Images} from '../../utils/theme';
import {AppLogoImage, SplashContainerView} from './SplashScreenStyle';
import {debugLog} from '../../functions/commonFunctions';

// Components

export default function SplashScreen(props) {
    // useEffect

    useEffect(() => {
        debugLog('splash', 'Splash');

        const timer = setTimeout(() => {
            props.navigation.replace('NavStack');
        }, 2000); // 5 seconds

        return () => clearTimeout(timer); // Cleanup on unmount
    }, []);

    // Render Component
    return (
        <SplashContainerView>
            <AppLogoImage source={Images.splashScreenImage} resizeMode={'contain'} />
        </SplashContainerView>
    );
}
