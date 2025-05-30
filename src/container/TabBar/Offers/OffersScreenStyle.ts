import styled from 'styled-components/native';
import {Colors, Responsive} from '../../../utils/theme';
import {StyleSheet} from 'react-native';

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
  padding-bottom: ${Responsive.heightPercentageToDP(1.5)}px;
`;

export const LeftSection = styled.View`
  flex-direction: row;
  align-items: center;
`;

export const ProfileImage = styled.Image`
  width: ${Responsive.widthPercentageToDP(12)}px;
  height: ${Responsive.widthPercentageToDP(12)}px;
  border-radius: ${Responsive.widthPercentageToDP(10)}px;
`;

export const InfoWrapper = styled.View`
  margin-left: ${Responsive.widthPercentageToDP(2)}px;
`;

export const Name = styled.Text`
  font-size: 16px;
  font-weight: bold;
  color: #000;
`;

export const AddressWrapper = styled.View`
  flex-direction: row;
  align-items: center;
  margin-top: 2px;
`;

export const LocationIcon = styled.Image`
  width: ${Responsive.widthPercentageToDP('6')}px;
  height: ${Responsive.widthPercentageToDP('7')}px;
`;

export const AddressText = styled.Text`
  font-size: 13px;
  color: #7a7a7a;
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
  width: 40px;
  height: 40px;
  background-color: #fff;
  border-radius: 20px;
  justify-content: center;
  align-items: center;
  margin-left: 10px;
`;


export const Container = styled.View`
  flex-direction: row;
  justify-content: space-between;
  padding: ${Responsive.widthPercentageToDP(2)}px;
  flex-wrap: wrap;
`;

export const IconBox = styled.View`
  align-items: center;
  width: ${Responsive.widthPercentageToDP(15)}px;
  /* margin-bottom: 10px; */
`;

export const IconImage = styled.Image`
  width: ${Responsive.widthPercentageToDP(15)}px;
  height: ${Responsive.widthPercentageToDP(15)}px;
  border-radius: ${Responsive.widthPercentageToDP(3)}px;
`;

export const ScrollContainer = styled.ScrollView`
  padding: ${Responsive.widthPercentageToDP(3)}px;
  flex-direction: row;
`;

export const BannerImage = styled.Image`
  width: ${Responsive.widthPercentageToDP(65)}px;
  height: ${Responsive.widthPercentageToDP(40)}px;
  border-radius: ${Responsive.widthPercentageToDP(3)}px;
  margin-right: ${Responsive.widthPercentageToDP(3)}px;
`;

export const Wrapper = styled.View`
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: space-between;
  padding: ${Responsive.widthPercentageToDP(3)}px;
`;

export const DealCard = styled.View`
  width: 23%;
  border-radius: ${Responsive.widthPercentageToDP(2)}px;
  padding-vertical: ${Responsive.widthPercentageToDP(2)}px;
  justify-content: space-between;
  align-items: center;
  background-color: ${props => props.bgColor};
`;

export const DealButton = styled.TouchableOpacity`
  padding: ${Responsive.widthPercentageToDP(0.8)}px
    ${Responsive.widthPercentageToDP(3)}px;
  border-radius: ${Responsive.widthPercentageToDP(5)}px;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  background-color: ${props => props.btnColor};
`;

export const FastForwardImage = styled.Image`
  width: ${Responsive.widthPercentageToDP(4)}px;
  height: ${Responsive.widthPercentageToDP(3)}px;
`;

export const ImageContainer = styled.View`
  padding: ${Responsive.widthPercentageToDP(4)}px;
`;

export const BannerImages1 = styled.Image`
  width: 100%;
  height: undefined;
  aspect-ratio: 3.6;
`;

export const BannerImages2 = styled.Image`
  width: 100%;
  height: undefined;
  aspect-ratio: 4.9;
`;

export const SavingsContainer = styled.View`
  flex-direction: row;
  align-items: center;
  justify-content: center;
  background-color: ${Colors.white};
  padding: ${Responsive.widthPercentageToDP(4)}px;
  margin-horizontal: ${Responsive.widthPercentageToDP(4)}px;
`;

export const PercentImage = styled.Image`
  width: ${Responsive.widthPercentageToDP(10)}px;
  height: ${Responsive.widthPercentageToDP(10)}px;
  resize-mode: contain;
`;

export const TopOffersRow = styled.View`
  flex-direction: row;
  justify-content: space-between;
  padding: ${Responsive.heightPercentageToDP(2)}px;
`;

export const OfferCard = styled.View`
  width: 30%;
  background-color: ${Colors.white};
  border-radius: ${Responsive.widthPercentageToDP(2)}px;
  overflow: hidden;
  elevation: 3;
`;

export const OfferImage = styled.Image`
  width: 100%;
  height: ${Responsive.heightPercentageToDP(15)}px;
`;

export const OfferBottomOverlay = styled.View`
  background-color: ${Colors.redED2};
  padding: ${Responsive.heightPercentageToDP(0.5)}px;
  align-items: center;
`;

export const SectionHeader = styled.View`
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  padding-horizontal: ${Responsive.widthPercentageToDP(4)}px;
`;

export const OfferContainer = styled.View`
  flex: 1;
  padding-horizontal: ${Responsive.widthPercentageToDP(4)}px;
`;

export const HeaderRow = styled.View`
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
`;

export const Card = styled.View`
  border-radius: ${Responsive.widthPercentageToDP(3)}px;
  overflow: hidden;
  elevation: 3;
`;

export const ImageWrapper = styled.View`
  position: relative;
`;

export const CardImage = styled.Image`
  width: 100%;
  height: ${Responsive.widthPercentageToDP(40)}px;
  border-radius: ${Responsive.widthPercentageToDP(3)}px;
`;

export const OfferBadge = styled.View`
  position: absolute;
  top: 12px;
  left: 12px;
  background-color: #fff;
  padding: ${Responsive.widthPercentageToDP(1)}px ${Responsive.widthPercentageToDP(2)}px;
  border-radius: ${Responsive.widthPercentageToDP(1)}px;
  flex-direction: row;
  align-items: center;
  z-index: 1;
`;

export const HeartIcon = styled.TouchableOpacity`
  position: absolute;
  top: 12px;
  right: 12px;
  background-color: ${Colors.grayEF};
  padding: ${Responsive.widthPercentageToDP(1)}px;
  border-radius: ${Responsive.widthPercentageToDP(10)}px;
`;

export const InfoSection = styled.View`
  padding-vertical: ${Responsive.widthPercentageToDP(2)}px;
`;

export const InfoRow = styled.View`
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
`;

export const Stars = styled.View`
  flex-direction: row;
`;

export const DeliveryTime = styled.View`
  flex-direction: row;
  align-items: center;
`;

export const SmallIconImage = styled.Image`
  width: ${Responsive.widthPercentageToDP(4)}px;
  height: ${Responsive.widthPercentageToDP(4)}px;
`;

export const HeartIconImage = styled.Image`
  width: ${Responsive.widthPercentageToDP(4)}px;
  height: ${Responsive.widthPercentageToDP(4)}px;
`;

export const styles = StyleSheet.create({
  leftIconStyle: {
    tintColor: Colors.redED,
  },
  iconStyle: {
    tintColor: Colors.grayBB,
  },
  searchInput: {
    height: Responsive.heightPercentageToDP(5),
    alignItems: 'center',
    borderRadius: Responsive.widthPercentageToDP(50),
    borderColor: Colors.transparent,
  },
});
