import styled from 'styled-components/native';
import {Colors, Responsive} from '../../../../utils/theme';

export const HeaderContainer = styled.View`
  background-color: ${Colors.pinkFD};
  padding: ${Responsive.heightPercentageToDP(0)}px
    ${Responsive.widthPercentageToDP(3)}px;
  border-bottom-left-radius: ${Responsive.widthPercentageToDP(5)}px;
  border-bottom-right-radius: ${Responsive.widthPercentageToDP(5)}px;
  flex-direction: row;
  align-items: center;
  height: ${Responsive.heightPercentageToDP('8')}px;
`;

export const HeaderBackTouchableOpacity = styled.TouchableOpacity`
  padding-horizontal: ${Responsive.widthPercentageToDP('2')}px;
`;

export const BackIconImage = styled.Image`
  width: ${Responsive.widthPercentageToDP(8)}px;
  height: ${Responsive.widthPercentageToDP(8)}px;
`;

export const Container = styled.View`
  flex: 1;
  background-color: ${Colors.white};
  align-items: center;
  justify-content: center;
  padding: ${Responsive.widthPercentageToDP(5)}px;
`;

export const SuccessImage = styled.Image`
  width: ${Responsive.widthPercentageToDP(60)}px;
  height: ${Responsive.widthPercentageToDP(60)}px;
`;

export const Button = styled.TouchableOpacity`
  background-color: ${Colors.redED};
  padding: ${Responsive.widthPercentageToDP(3)}px;
  border-radius: ${Responsive.widthPercentageToDP(2)}px;
  align-items: center;
`;
