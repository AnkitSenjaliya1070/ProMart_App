import styled from 'styled-components/native';
import {Colors, Responsive} from '../../../../utils/theme';
import {StyleSheet} from 'react-native';

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

export const FilterRow = styled.View`
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: space-between;
  padding: ${Responsive.heightPercentageToDP(1)}px
    ${Responsive.widthPercentageToDP(4)}px;
  padding-top: ${Responsive.widthPercentageToDP(3)}px;
`;

export const FilterButton = styled.TouchableOpacity`
  padding: ${Responsive.widthPercentageToDP(2)}px
    ${Responsive.widthPercentageToDP(4)}px;
  background-color: ${Colors.grayE9};
  border-radius: ${Responsive.widthPercentageToDP(20)}px;
  flex-direction: row;
  align-items: center;
`;

export const CardTouchableOpacity = styled.TouchableOpacity`
  flex: 1;
  background-color: ${Colors.white};
  margin: ${Responsive.widthPercentageToDP(1)}px;
  border-radius: ${Responsive.widthPercentageToDP(3)}px;
`;

export const ProductImage = styled.Image`
  width: 100%;
  height: 170px;
  border-top-left-radius: ${Responsive.widthPercentageToDP(3)}px;
  border-top-right-radius: ${Responsive.widthPercentageToDP(3)}px;
`;

export const DetailView = styled.View`
  padding: ${Responsive.widthPercentageToDP(2)}px;
`;

export const PriceRow = styled.View`
  flex-direction: row;
  align-items: center;
`;

export const OriginalPrice = styled.Text`
  font-size: ${Responsive.convertFontScale(10)}px;
  color: ${Colors.pinkFB};
  text-decoration: line-through;
  text-decoration-color: ${Colors.pinkFB};
  margin-left: ${Responsive.widthPercentageToDP(2)}px;
`;
export const RatingRow = styled.View`
  flex-direction: row;
  align-items: center;
  margin-top: ${Responsive.widthPercentageToDP(1)}px;
`;

export const WishlistIcon = styled.TouchableOpacity`
  position: absolute;
  top: ${Responsive.widthPercentageToDP(2)}px;
  right: ${Responsive.widthPercentageToDP(2)}px;
  z-index: 1;
  background-color: ${Colors.white};
  border-radius: ${Responsive.widthPercentageToDP(4)}px;
  padding: ${Responsive.widthPercentageToDP(1.5)}px;
`;

export const HeartIconImage = styled.Image`
  width: ${Responsive.widthPercentageToDP(5)}px;
  height: ${Responsive.widthPercentageToDP(5)}px;
`;

export const DownArrowImage = styled.Image`
  width: ${Responsive.widthPercentageToDP(2.5)}px;
  margin-left: ${Responsive.widthPercentageToDP(1.5)}px;
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
