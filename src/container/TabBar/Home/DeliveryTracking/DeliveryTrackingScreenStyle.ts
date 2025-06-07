import styled from 'styled-components/native';
import {Colors, Responsive} from '../../../../utils/theme';
import { StyleSheet } from 'react-native';

export const HeaderContainer = styled.View`
  background-color: ${Colors.pinkFD};
  padding: ${Responsive.heightPercentageToDP(0)}px
    ${Responsive.widthPercentageToDP(3)}px;
  padding-top: ${Responsive.heightPercentageToDP(1.5)}px;
  border-bottom-left-radius: ${Responsive.widthPercentageToDP(5)}px;
  border-bottom-right-radius: ${Responsive.widthPercentageToDP(5)}px;
`;

export const HeaderTopContainer = styled.View`
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
`;

export const LeftSection = styled.View`
  flex-direction: row;
  align-items: center;
`;

export const LocationIcon = styled.Image`
  width: ${Responsive.widthPercentageToDP('6')}px;
  height: ${Responsive.widthPercentageToDP('7')}px;
`;

export const InfoWrapper = styled.View`
  margin-left: ${Responsive.widthPercentageToDP(2)}px;
`;

export const RightSection = styled.View`
  flex-direction: row;
  align-items: center;
`;

export const RightIcon = styled.Image`
  width: ${Responsive.widthPercentageToDP('6')}px;
  height: ${Responsive.widthPercentageToDP('6')}px;
`;

export const IconButton = styled.TouchableOpacity`
  width: ${Responsive.widthPercentageToDP(10)}px;
  height: ${Responsive.widthPercentageToDP(10)}px;
  background-color: ${Colors.white};
  border-radius: ${Responsive.widthPercentageToDP(10)}px;
  justify-content: center;
  align-items: center;
`;

export const ProfileImage = styled.Image`
  width: ${Responsive.widthPercentageToDP(12)}px;
  height: ${Responsive.widthPercentageToDP(12)}px;
  border-radius: ${Responsive.widthPercentageToDP(10)}px;
`;

export const DateRow = styled.View`
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
`;

export const DateBox = styled.View`
  background-color: ${Colors.redED2};
  padding: ${Responsive.widthPercentageToDP(2)}px ${Responsive.widthPercentageToDP(3)}px;
  border-radius: ${Responsive.widthPercentageToDP(2)}px;
  flex-direction: row;
  align-items: center;
`;

export const CalendarIcon = styled.Image`
  width: ${Responsive.widthPercentageToDP(5)}px;
  height: ${Responsive.widthPercentageToDP(5)}px;
`;

export const AvailabilityRow = styled.View`
  flex-direction: row;
  align-items: center;
`;

export const MapContainer = styled.View`
  flex: 1;
  background-color: ${Colors.white};
`;

export const Footer = styled.View`
  position: absolute;
  bottom: 20px;
  left: 20px;
  right: 20px;
  background-color: ${Colors.white};
  padding: ${Responsive.widthPercentageToDP(4)}px;
  border-radius: ${Responsive.widthPercentageToDP(4)}px;
  shadow-color: #000;
  shadow-offset: 0px 2px;
  shadow-opacity: 0.2;
  shadow-radius: 6px;
  elevation: 10;
`;

export const DeliveryInfo = styled.View``;

export const ButtonsRow = styled.View`
  flex-direction: row;
  justify-content: space-between;
  flex-wrap: wrap;
`;

export const CallButton = styled.TouchableOpacity`
  background-color: ${Colors.yellowFF};
  padding: ${Responsive.widthPercentageToDP(3)}px ${Responsive.widthPercentageToDP(5)}px;
  border-bottom-left-radius: ${Responsive.widthPercentageToDP(3)}px;
  flex: 1;
`;

export const DeliveredButton = styled.TouchableOpacity`
  background-color: ${Colors.green4A};
  padding: ${Responsive.widthPercentageToDP(3)}px ${Responsive.widthPercentageToDP(5)}px;
  border-bottom-right-radius: ${Responsive.widthPercentageToDP(3)}px;
  flex: 1;
`;

export const ButtonText = styled.Text<{white?: boolean}>`
  text-align: center;
  color: ${({white}) => (white ? Colors.white : Colors.black)};
  font-weight: bold;
`;


export const styles = StyleSheet.create({
  switchWrapper: {
    transform: [{ scaleX: 1.1 }, { scaleY: 0.7 }],
  },
  switchBorder: {
    borderWidth: Responsive.widthPercentageToDP(0.3),
    borderColor: 'transparent',
    borderRadius: Responsive.widthPercentageToDP(5),
    backgroundColor: Colors.white,
  },
  switchBorderActive: {
    borderColor: Colors.green4A,
  },
  innerSwitch: {
    transform: [{ scaleX: 1 }, { scaleY: 1 }],
  },
});
