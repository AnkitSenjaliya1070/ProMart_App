import {StyleSheet} from 'react-native';
import {styled} from 'styled-components/native';

// Components
import {Colors, Fonts, Responsive} from '../../utils/theme';

export const Container = styled.View`
    margin-vertical: ${Responsive.heightPercentageToDP('0.2')}px;
`;

export const LabelContainer = styled.View`
    flex-direction: row;
    justify-content: space-between;
`;

export const Label = styled.Text`
    font-size: ${Responsive.convertFontScale(12)}px;
    font-family: ${Fonts.ThemeMedium};
    color: ${Colors.black};
    line-height: ${16.8}px;
    font-weight: 500;
    margin-vertical: ${Responsive.heightPercentageToDP('1')}px;
`;

export const ErrorMessageLabel = styled.Text`
    font-size: ${Responsive.convertFontScale(10)}px;
    font-family: ${Fonts.ThemeMedium};
    margin-horizontal: ${Responsive.widthPercentageToDP('5')}px;
    margin-top: ${Responsive.heightPercentageToDP('0.3')}px;
`;

export const InputView = styled.TextInput`
    flex: 1;
    font-size: ${Responsive.convertFontScale(14)}px;
    font-family: ${Fonts.ThemeRegular};
    font-weight: 400;
    color: ${Colors.black};
    flex-wrap: wrap;
    text-align: left;
    height: ${Responsive.heightPercentageToDP('5.5')}px;
`;

export const InputText = styled.Text`
    font-size: ${Responsive.convertFontScale(14)}px;
    font-family: ${Fonts.ThemeRegular};
    font-weight: 400;
    color: ${Colors.black};
    flex: ${1};
    flex-wrap: wrap;
`;

export const LeftIconContainer = styled.View`
    margin-right: ${Responsive.widthPercentageToDP('2.5')}px;
    height: ${Responsive.widthPercentageToDP('6')}px;
`;
export const InfoIconContainer = styled.TouchableOpacity`
    margin-right: ${Responsive.widthPercentageToDP('2.5')}px;
    height: ${Responsive.widthPercentageToDP('6')}px;
`;

export const RightIconTouchableView = styled.TouchableOpacity`
    padding-horizontal: ${Responsive.widthPercentageToDP('1')}px;
    padding-vertical: ${Responsive.heightPercentageToDP('0.7')}px;
    margin-left: ${Responsive.widthPercentageToDP('1')}px;
`;

export const RightIcon = styled.Image<any>`
    height: ${Responsive.widthPercentageToDP('5')}px;
    width: ${Responsive.widthPercentageToDP('5')}px;
    /* tint-color: ${Colors.orangeFE8}; */
`;

export const styles = StyleSheet.create({
    textStyle: {
        lineHeight: 16.8,
    },
    leftIconContainer: {
        justifyContent: 'center',
    },
    placeholderStyle: {
        // color: Colors.grayAA,
    },
    multilineTextStyle: {
        height: Responsive.heightPercentageToDP('10'),
        textAlignVertical: 'top',
    },
    invalidInputStyle: {
        borderWidth: Responsive.widthPercentageToDP('0.2'),
        flexDirection: 'row',
        alignItems: 'center',
        height: Responsive.heightPercentageToDP('6'),
        paddingHorizontal: Responsive.widthPercentageToDP('3'),
        borderRadius: Responsive.widthPercentageToDP('3'),
        // borderColor: Colors.redShadeE3,
    },
    inputContainerStyle: {
        flexDirection: 'row',
        alignItems: 'center',
        height: Responsive.heightPercentageToDP('6'),
        paddingHorizontal: Responsive.widthPercentageToDP('3'),
        borderRadius: Responsive.widthPercentageToDP('3'),
        borderWidth: Responsive.widthPercentageToDP('0.2'),
        // borderColor: Colors.borderDD,
        backgroundColor: Colors.white,
    },
    errorImageStyle: {
        // tintColor: Colors.redShadeE3,
    },
});
