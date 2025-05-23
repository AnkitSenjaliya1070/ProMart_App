import {StyleSheet} from 'react-native';
import styled from 'styled-components/native';
import {Colors, Fonts, Responsive} from '../../../utils/theme';

export const HeaderContainer = styled.View`
  padding-horizontal: ${Responsive.widthPercentageToDP('4')}px;
`;

export const TopRow = styled.View`
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
`;

export const LogoWrapper = styled.View`
  width: 50%;
  justify-content: center;
`;

export const Logo = styled.Image`
  width: 100%;
  height: ${Responsive.heightPercentageToDP('7')}px;
  resize-mode: contain;
`;

export const LocationBox = styled.View`
  flex-direction: row;
  align-items: center;
`;

export const LocationIcon = styled.Image`
  width: ${Responsive.widthPercentageToDP('7')}px;
  height: ${Responsive.widthPercentageToDP('7')}px;
`;

export const LocationText = styled.Text`
  font-size: ${Responsive.convertFontScale(14)}px;
  font-weight: 500;
  margin-left: ${Responsive.widthPercentageToDP(2)}px;
`;

export const LocationSubText = styled.Text`
  font-size: ${Responsive.convertFontScale(12)}px;
  font-family: ${Fonts.ThemeRegular};
  margin-left: ${Responsive.widthPercentageToDP(1)}px;
`;

export const DownArrowImage = styled.Image`
width: ${Responsive.widthPercentageToDP(3)}px;
margin-left: ${Responsive.widthPercentageToDP(3)}px;
  resize-mode: contain;
`;

export const styles = StyleSheet.create({
  leftIconStyle: {
    tintColor: Colors.grayC7,
  },
  iconStyle: {
    height: Responsive.widthPercentageToDP('2.5'),
    width: Responsive.widthPercentageToDP('2.5'),
    tintColor: Colors.redED,
  },
  searchInput: {
    height: Responsive.heightPercentageToDP(5),
    alignItems: 'center',
    // borderRadius: 0,
    borderColor: Colors.grayC7,
  },
});
