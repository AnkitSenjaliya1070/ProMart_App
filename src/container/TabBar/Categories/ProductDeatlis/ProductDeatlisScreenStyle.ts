import styled from 'styled-components/native';
import {Colors, Responsive} from '../../../../utils/theme';
import {Dimensions, StyleSheet} from 'react-native';

const {width} = Dimensions.get('window');

export const Container = styled.ScrollView`
  padding-horizontal: ${Responsive.widthPercentageToDP('3')}px;
`;

export const HeaderContainer = styled.View`
  background-color: ${Colors.pinkFD};
  padding: ${Responsive.heightPercentageToDP(0)}px
    ${Responsive.widthPercentageToDP(3)}px;
  padding-top: ${Responsive.heightPercentageToDP(2)}px;
  border-bottom-left-radius: ${Responsive.widthPercentageToDP(5)}px;
  border-bottom-right-radius: ${Responsive.widthPercentageToDP(5)}px;
`;

export const ProductImage = styled.Image`
  width: 100%;
  height: 350px;
  margin: 16px 0;
`;

export const ItemSeparator = styled.View`
  height: ${Responsive.heightPercentageToDP(0.2)}px;
  background-color: ${Colors.grayCF};
`;

export const Row = styled.View`
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  margin-vertical: ${Responsive.heightPercentageToDP(1)}px;
`;

export const LeftSide = styled.View`
  flex-direction: row;
  align-items: center;
`;

export const PriceRow = styled.View`
  flex-direction: row;
  align-items: center;
`;

export const MemoryOption = styled.TouchableOpacity<{selected: boolean}>`
  padding-horizontal: ${Responsive.widthPercentageToDP(4)}px;
  padding-vertical: ${Responsive.widthPercentageToDP(1.5)}px;
  border-width: 1px;
  border-radius: ${Responsive.widthPercentageToDP(3)}px;
  border-color: ${({selected}) => (selected ? '#000' : '#ccc')};
  background-color: ${({selected}) => (selected ? '#e6f0ff' : Colors.white)};
`;

export const RatingRow = styled.View`
  flex-direction: row;
  align-items: center;
  margin-top: ${Responsive.widthPercentageToDP(1)}px;
  justify-content: space-between;
`;

export const RatingText = styled.Text`
  color: ${Colors.grayA4};
  font-size: ${Responsive.convertFontScale(10)}px;
  margin-top: ${Responsive.widthPercentageToDP(1)}px;
  margin-left: ${Responsive.widthPercentageToDP(1)}px;
`;

export const EMIWrapper = styled.TouchableOpacity`
  background-color: ${Colors.white};
  padding: ${Responsive.widthPercentageToDP(3)}px;
  border-top-left-radius: ${Responsive.widthPercentageToDP(3)}px;
  border-top-right-radius: ${Responsive.widthPercentageToDP(3)}px;
  elevation: 3;
`;

export const DataRowView = styled.View`
  flex: 1;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
`;

export const MoneyEMIImage = styled.Image`
  width: ${Responsive.widthPercentageToDP(9)}px;
  height: ${Responsive.widthPercentageToDP(9)}px;
  margin-right: ${Responsive.widthPercentageToDP(2)}px;
`;

export const RightArrowImage = styled.Image`
  width: ${Responsive.widthPercentageToDP(5)}px;
  height: ${Responsive.widthPercentageToDP(5)}px;
`;

export const FeatureWrapper = styled.View`
  flex-direction: row;
  justify-content: space-around;
  background-color: ${Colors.white};
  padding: ${Responsive.widthPercentageToDP(3)}px;
  border-top-left-radius: ${Responsive.widthPercentageToDP(3)}px;
  border-top-right-radius: ${Responsive.widthPercentageToDP(3)}px;
  elevation: 3;
`;

export const FeatureCard = styled.View`
  align-items: center;
  width: ${width / 4.5}px;
`;

export const IconBox = styled.View`
  background-color: #f9f9f9;
  padding: 12px;
  border-radius: 16px;
  margin-bottom: 6px;
`;

export const IconImage = styled.Image`
  width: ${Responsive.widthPercentageToDP(9)}px;
  height: ${Responsive.widthPercentageToDP(9)}px;
`;

export const BottomBar = styled.View`
  width: 100%;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  padding: ${Responsive.widthPercentageToDP(3)}px;
`;

export const QuantitySelector = styled.TouchableOpacity`
  background-color: ${Colors.redED};
  width: ${Responsive.widthPercentageToDP(25)}px;
  /* padding-horizontal: ${Responsive.widthPercentageToDP(8)}px; */
  padding-vertical: ${Responsive.heightPercentageToDP(1.5)}px;
  border-radius: ${Responsive.widthPercentageToDP(3)}px;
  /* flex-direction: row; */
  align-items: center;
`;

export const BuyNowButton = styled.TouchableOpacity`
  background-color: ${Colors.redED};
  padding-horizontal: ${Responsive.widthPercentageToDP(15)}px;
  padding-vertical: ${Responsive.heightPercentageToDP(1.5)}px;
  border-radius: ${Responsive.widthPercentageToDP(3)}px;
`;

export const BuyNowText = styled.Text`
  color: ${Colors.white};
  font-size: ${Responsive.convertFontScale(18)}px;
  font-weight: bold;
`;

export const SpecRow = styled.View`
  flex-direction: row;
  padding: ${Responsive.heightPercentageToDP(1.5)}px
    ${Responsive.widthPercentageToDP(2)}px;
  border-bottom-width: ${Responsive.widthPercentageToDP(0.05)}px;
  border-bottom-color: ${Colors.grayB9};
`;

export const SpecContainer = styled.View`
  width: 50%;
`;

export const ViewMoreTouchableOpacity = styled.TouchableOpacity`
  flex-direction: row;
  align-items: center;
`;

export const DownArrowImage = styled.Image`
  width: ${Responsive.widthPercentageToDP(3)}px;
  margin-left: ${Responsive.widthPercentageToDP(1)}px;
  tint-color: ${Colors.redED};
`;

export const ImageContainer = styled.View`
  aspect-ratio: 8;
  overflow: hidden;
`;

export const OfferImage = styled.Image`
  width: 100%;
  height: 100%;
`;

export const ReviewContainer = styled.View`
  flex-direction: row;
`;

export const LeftView = styled.View``;

export const RightView = styled.View`
  flex: 1;
  margin-left: ${Responsive.widthPercentageToDP(1)}px;
`;

export const Avatar = styled.Image`
  width: ${Responsive.widthPercentageToDP(14)}px;
  height: ${Responsive.widthPercentageToDP(14)}px;
  border-radius: ${Responsive.widthPercentageToDP(10)}px;
  border-width: ${Responsive.widthPercentageToDP(1.5)}px;
  border-color: white;
`;

export const Info = styled.View`
  flex-direction: row;
  justify-content: space-between;
  padding-top: ${Responsive.widthPercentageToDP(2.5)}px;
`;

export const ImagesList = styled.FlatList`
  margin-vertical: ${Responsive.widthPercentageToDP(3)}px;
`;

export const ReviewImage = styled.Image`
  width: ${Responsive.widthPercentageToDP(22)}px;
  height: ${Responsive.heightPercentageToDP(7)}px;
  margin-right: ${Responsive.widthPercentageToDP(3)}px;
`;

export const MoreButton = styled.TouchableOpacity`
  margin-top: ${Responsive.heightPercentageToDP(0.5)}px;
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
  filterImageSize: {
    height: Responsive.heightPercentageToDP(2),
  },
});
