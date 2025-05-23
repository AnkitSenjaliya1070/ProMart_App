import React from 'react';
import {SafeAreaView} from 'react-native-safe-area-context';

import {SafeAreaContView} from '../../utils/theme/commonStyle';
import {styles} from './SafeAreaContainerViewStyle';

const SafeAreaContainerView = ({children, style = {}}: {children?: any; style?: any}) => {
    return (
        <SafeAreaView style={[styles.container, style]}>
            <SafeAreaContView>{children}</SafeAreaContView>
        </SafeAreaView>
    );
};

export default SafeAreaContainerView;
