import React from 'react';
import {type ImageSourcePropType} from 'react-native';

// Mics Constants
import {TabIcon, TabText} from './TabBarIconStyle';

export default function TabBarIcon(props: TabBarIconProps) {
    const {imageName, labelText, focused, color} = props;
    return (
        <>
            <TabIcon source={imageName} color={color} focused={focused} />
            {/* {focused === true && ( */}
                <TabText color={color} focused={focused}>
                    {labelText}
                </TabText>
            {/* )} */}
        </>
    );
}

export type TabBarIconProps = {
    imageName: ImageSourcePropType;
    focused: boolean;
    color: any;
    size: any;
    labelText: string | undefined;
};
