import styled from 'styled-components/native';
import {Colors, Fonts, Responsive} from '../../../utils/theme';
import {Dimensions, StyleSheet} from 'react-native';

const screenWidth = Dimensions.get('window').width;

export const Container = styled.View`
  flex: 1;
`;

export const SlideWrapper = styled.View`
  width: 100%;
`;

export const SlideImage1 = styled.Image`
  width: 100%;
  height: ${Responsive.heightPercentageToDP(25)}px;
  /* resize-mode: cover; */
`;

export const CategoryGridContainer = styled.View`
  flex-direction: row;
  justify-content: space-between;
  flex-wrap: wrap;
  padding: ${Responsive.widthPercentageToDP(3)}px;
`;

export const CategoryCard = styled.TouchableOpacity`
  width: ${Responsive.widthPercentageToDP('30%')}px;
  padding: ${Responsive.widthPercentageToDP(2)}px;
  align-items: center;
`;

export const CategoryImageRow = styled.View`
  flex-direction: row;
  justify-content: space-between;
  width: 100%;
`;

export const CategoryImage = styled.Image`
  width: ${Responsive.widthPercentageToDP(12)}px;
  height: ${Responsive.heightPercentageToDP(6)}px;
  margin-bottom: ${Responsive.widthPercentageToDP(2)}px;
`;

export const CategoryTitle = styled.Text`
  font-size: ${Responsive.convertFontScale(8)}px;
  font-weight: 500;
  text-align: center;
`;

export const SwiperContainer1 = styled.View`
  padding-horizontal: ${Responsive.widthPercentageToDP(3)}px;
`;

export const SwiperContainer = styled.View`
  padding-horizontal: ${Responsive.widthPercentageToDP(3)}px;
  width: 100%;
  aspect-ratio: 3.5;
  overflow: hidden;
`;

export const SlideImage = styled.Image`
  width: 100%;
  height: 100%;
  resize-mode: cover;
  border-radius: ${Responsive.widthPercentageToDP(2)}px;
`;

export const MainLabel = styled.Text`
  padding-vertical: ${Responsive.heightPercentageToDP(2.5)}px;
  font-size: ${Responsive.convertFontScale(18)}px;
  font-family: ${Fonts.ThemeRegular};
  font-weight: 500;
`;

export const GroceryGridContainer = styled.View`
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: space-between;
`;

export const GroceryItem = styled.TouchableOpacity`
  width: ${Responsive.widthPercentageToDP('22%')}px;
  margin-bottom: ${Responsive.heightPercentageToDP(2)}px;
  align-items: center;
`;

export const GroceryImage = styled.Image`
  width: ${Responsive.widthPercentageToDP('20%')}px;
  height: ${Responsive.widthPercentageToDP('20%')}px;
  border-radius: 10px;
`;

export const GroceryLabel = styled.Text`
  margin-top: ${Responsive.heightPercentageToDP(0.7)}px;
  font-size: ${Responsive.convertFontScale(10)}px;
  font-weight: 500;
  text-align: center;
`;

export const MainCatView = styled.View`
  padding-horizontal: ${Responsive.heightPercentageToDP(2)}px;
  /* padding-bottom: ${Responsive.heightPercentageToDP(3)}px; */
`;

export const MainCatViewRow = styled.View`
  padding-bottom: ${Responsive.heightPercentageToDP(2)}px;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
`;

export const CatHeading = styled.Text`
  font-size: ${Responsive.convertFontScale(18)}px;
  font-family: ${Fonts.ThemeRegular};
  font-weight: 500;
`;

export const ViewAllButton = styled.TouchableOpacity`
  flex-direction: row;
  align-items: center;
`;

export const ViewAllText = styled.Text`
  font-size: ${Responsive.convertFontScale(12)}px;
  font-family: ${Fonts.ThemeRegular};
  color: ${Colors.black};
`;

export const RightArrowImage = styled.Image`
  width: ${Responsive.widthPercentageToDP(1.5)}px;
  margin-left: ${Responsive.widthPercentageToDP(1)}px;
  resize-mode: contain;
`;

export const DealCard = styled.TouchableOpacity`
  width: ${Responsive.widthPercentageToDP(40)}px;
  background-color: white;
  border-radius: ${Responsive.widthPercentageToDP(2)}px;
  margin-right: ${Responsive.widthPercentageToDP(3)}px;
  border: 1px solid ${Colors.grayC7};
`;

export const PaddingView = styled.View`
  padding: 10px;
`;

export const DealImage = styled.Image`
  border-top-left-radius: ${Responsive.widthPercentageToDP(1.5)}px;
  border-top-right-radius: ${Responsive.widthPercentageToDP(1.5)}px;
  width: 100%;
  height: ${Responsive.heightPercentageToDP(18)}px;
`;

export const DealTitle = styled.Text`
  font-size: ${Responsive.convertFontScale(12)}px;
  font-family: ${Fonts.ThemeRegular};
  color: ${Colors.black};
`;

export const DealPriceRow = styled.View`
  flex-direction: row;
  align-items: center;
  margin-top: ${Responsive.widthPercentageToDP(0.5)}px;
`;

export const DealOriginalPrice = styled.Text`
  text-decoration-line: line-through;
  font-size: ${Responsive.convertFontScale(12)}px;
  color: ${Colors.grayA3};
  margin-right: ${Responsive.widthPercentageToDP(1)}px;
`;

export const DealFinalPrice = styled.Text`
  font-size: ${Responsive.convertFontScale(12)}px;
  font-family: ${Fonts.ThemeRegular};
  color: ${Colors.black};
`;

export const DealBottomRow = styled.View`
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  margin-top: ${Responsive.widthPercentageToDP(0.5)}px;
`;

export const DealDiscount = styled.Text`
  font-size: ${Responsive.convertFontScale(12)}px;
  color: ${Colors.black};
  font-family: ${Fonts.ThemeRegular};
`;

export const StarView = styled.View`
  flex-direction: row;
  margin-right: ${Responsive.heightPercentageToDP(1)}px;
`;

export const Stars = styled.Image`
  width: ${Responsive.widthPercentageToDP(2.8)}px;
  height: ${Responsive.widthPercentageToDP(2.8)}px;
  margin-right: ${Responsive.widthPercentageToDP(0.8)}px;
`;

export const VisualCard = styled.TouchableOpacity`
  padding: ${Responsive.widthPercentageToDP(1)}px;
  width: ${Responsive.widthPercentageToDP(25)}px;
  background-color: white;
  border-radius: ${Responsive.widthPercentageToDP(1)}px;
  margin-right: ${Responsive.widthPercentageToDP(3)}px;
  border: 1px solid ${Colors.grayC7};
  overflow: hidden;
`;

export const VisualCardImage = styled.Image`
  width: 100%;
  height: ${Responsive.widthPercentageToDP('23')}px;
`;

export const VisualCardTitle = styled.Text`
  font-size: ${Responsive.convertFontScale(8)}px;
  font-weight: 500;
  text-align: center;
  margin-top: ${Responsive.heightPercentageToDP(1)}px;
`;

export const VisualCardSubtitle = styled.Text`
  font-size: ${Responsive.convertFontScale(8)}px;
  text-align: center;
  font-weight: 500;
  margin-top: ${Responsive.heightPercentageToDP(0.4)}px;
  margin-bottom: ${Responsive.heightPercentageToDP(0.5)}px;
`;

// fdufhdfh

export const FashionCard = styled.TouchableOpacity`
  width: ${Responsive.widthPercentageToDP(22)}px;
  background-color: white;
  margin-right: ${Responsive.widthPercentageToDP(1.2)}px;
  border: 1px solid ${Colors.grayC7};
  overflow: hidden;
  border-bottom-left-radius: ${Responsive.widthPercentageToDP(1)}px;
  border-bottom-right-radius: ${Responsive.widthPercentageToDP(1)}px;
`;

export const FashionCardImage = styled.Image`
  width: 100%;
  height: ${Responsive.widthPercentageToDP('23')}px;
`;

export const FashionCardTitle = styled.Text`
  font-size: ${Responsive.convertFontScale(10)}px;
  text-align: center;
  padding: ${Responsive.heightPercentageToDP(1)}px;
`;

export const CarouselWrapper = styled.View`
  padding-horizontal: ${Responsive.widthPercentageToDP(3)}px;
  margin-bottom: ${Responsive.heightPercentageToDP(3)}px;
`;

export const ImageContainer = styled.View`
  flex-direction: row;
  justify-content: space-between;
  padding-horizontal: ${Responsive.widthPercentageToDP(4)}px;
`;

export const PromoCard = styled.Image`
  width: 49%;
  height: ${Responsive.widthPercentageToDP(47)};
  border-radius: ${Responsive.widthPercentageToDP(2)}px;
  overflow: hidden;
  box-shadow: 0px 2px 5px rgba(0, 0, 0, 0.1);
  elevation: 5;
`;

export const Container1 = styled.View`
  padding: 10px;
  background-color: #fff;
`;

export const CategoryWrapper = styled.View`
  flex-direction: row;
  padding-horizontal: ${Responsive.widthPercentageToDP(4)}px;
`;

export const CategoryItem = styled.View`
  align-items: center;
  margin-right: ${Responsive.widthPercentageToDP(2)}px;
`;

export const CategoryImage1 = styled.Image`
  width: ${Responsive.widthPercentageToDP(16)}px;
  height: ${Responsive.widthPercentageToDP(16)}px;
  border-radius: ${Responsive.widthPercentageToDP(10)}px;
  margin-bottom: ${Responsive.heightPercentageToDP(1)}px;
`;

export const CategoryText = styled.Text`
  font-size: ${Responsive.convertFontScale(8)}px;
  text-align: center;
`;

export const ProductsWrapper = styled.View`
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: space-between;
  padding-horizontal: ${Responsive.widthPercentageToDP(4)}px;
`;

export const ProductCard = styled.View`
  width: ${(screenWidth - 40) / 3}px;
`;

export const ProductImage = styled.Image`
  width: 100%;
  height: ${Responsive.heightPercentageToDP(10)}px;
  border-radius: ${Responsive.widthPercentageToDP(2)}px;
`;

export const styles = StyleSheet.create({
  imageContainerStyle: {
    borderRadius: Responsive.widthPercentageToDP('1'),
    height: Responsive.heightPercentageToDP(12),
  },
  imageStyle: {
    height: Responsive.heightPercentageToDP(17),
  },
  image1Style: {
    height: Responsive.heightPercentageToDP(7),
  },
  image2Style: {
    height: Responsive.heightPercentageToDP(5),
  },
  image3Style: {
    height: Responsive.heightPercentageToDP(15),
  },
  image4Style: {
    height: Responsive.heightPercentageToDP(8.3),
  },
  image5Style: {
    height: Responsive.heightPercentageToDP(9),
    borderRadius: Responsive.widthPercentageToDP(1),
  },
});
