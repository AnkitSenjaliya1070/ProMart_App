import { Platform, StyleSheet } from "react-native";
import { Fonts, Responsive } from ".";
import styled from "styled-components/native";

interface SeparatorProps {
    val?: number;
  }

export const SafeAreaContView = styled.SafeAreaView`
    flex: 1;
    padding-top: ${Responsive.heightPercentageToDP('1')}px;
`;

export const Separator = styled.View<SeparatorProps>`
  width: 100%;
  margin-vertical: ${(props: any) => Responsive.heightPercentageToDP(props?.val || 5)}px;
`
export const SeparatorH = styled.View`
  height: 100%;
  margin-horizontal: ${(props: any) => Responsive.widthPercentageToDP(props?.val || 5)}px;
`


const CommonStyles = StyleSheet.create({
    flex: {
        flex: 1,
    },
    centerItem: {
        justifyContent: 'center',
        alignItems: 'center',
    },
    centerText: {textAlign: 'center'},
    shadowContainer: {
        // Shadow properties for iOS
        ...Platform.select({
            ios: {
                shadowColor: '#000',
                shadowOffset: {width: 0, height: 2},
                shadowOpacity: 0.25,
                shadowRadius: 3.84,
            },
            // Elevation for Android
            android: {
                elevation: 5,
            },
        }),
    },
    searchIconStyle: {
        height: Responsive.widthPercentageToDP('5'),
        width: Responsive.widthPercentageToDP('5'),
    },
    placeholderStyle: {
        fontFamily: Fonts.ThemeRegular,
        fontSize: Responsive.convertFontScale('12'),
    },
    scrollContainer: {paddingBottom: Responsive.heightPercentageToDP(10)},
});

export default CommonStyles;