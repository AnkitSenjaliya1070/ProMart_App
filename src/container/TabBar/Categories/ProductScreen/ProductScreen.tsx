import React, {useState} from 'react';
import {
  Container,
  ProductImage,
  OriginalPrice,
  PriceRow,
  DetailView,
  WishlistIcon,
  HeartIconImage,
  RatingRow,
  styles,
  HeaderContainer,
  FilterRow,
  FilterButton,
  DownArrowImage,
  CardTouchableOpacity,
} from './ProductScreenStyle';
import {FlatList} from 'react-native';
import {Colors, Fonts, Images, Screens} from '../../../../utils/theme';
import StarRating from '../../../../components/StarRating/StarRating';
import TextInputView from '../../../../components/TextInputView/TextInputView';
import {localize} from '../../../../functions/commonFunctions';
import CommonStyles, {
  MainContainer,
  SafeAreaViewTop,
  SubTextBlack,
} from '../../../../utils/theme/commonStyle';
import {ParamListBase, useNavigation} from '@react-navigation/native';
import {NativeStackNavigationProp} from '@react-navigation/native-stack';

const products = [
  {
    id: '1',
    image: Images.demo3Image,
    title: 'Black Winter Hoodie',
    description: 'Autumn And Winter Casual cotton-padded jacket...',
    price: '₹499',
    originalPrice: '₹899',
    rating: 4.3,
    reviews: 6890,
  },
  {
    id: '2',
    image: Images.demo3Image,
    title: 'Black Winter Hoodie',
    description: 'Autumn And Winter Casual cotton-padded jacket...',
    price: '₹499',
    originalPrice: '₹899',
    rating: 4.3,
    reviews: 6890,
  },
  {
    id: '3',
    image: Images.demo3Image,
    title: 'Black Winter Hoodie',
    description: 'Autumn And Winter Casual cotton-padded jacket...',
    price: '₹499',
    originalPrice: '₹899',
    rating: 4.3,
    reviews: 6890,
  },
  {
    id: '4',
    image: Images.demo3Image,
    title: 'Black Winter Hoodie',
    description: 'Autumn And Winter Casual cotton-padded jacket...',
    price: '₹499',
    originalPrice: '₹899',
    rating: 4.3,
    reviews: 6890,
  },
  {
    id: '5',
    image: Images.demo3Image,
    title: 'Black Winter Hoodie',
    description: 'Autumn And Winter Casual cotton-padded jacket...',
    price: '₹499',
    originalPrice: '₹899',
    rating: 4.3,
    reviews: 6890,
  },
  {
    id: '6',
    image: Images.demo3Image,
    title: 'Black Winter Hoodie',
    description: 'Autumn And Winter Casual cotton-padded jacket...',
    price: '₹499',
    originalPrice: '₹899',
    rating: 4.3,
    reviews: 6890,
  },
];

export default function ProductScreen() {
  const navigation = useNavigation<NativeStackNavigationProp<ParamListBase>>();
  const [wishlist, setWishlist] = useState<string[]>([]);

  const toggleWishlist = (id: string) => {
    setWishlist(prev =>
      prev.includes(id) ? prev.filter(item => item !== id) : [...prev, id],
    );
  };

  const renderItem = ({item}: any) => (
    <CardTouchableOpacity
      onPress={() =>
        navigation.navigate(Screens.ProductDetailsScreen, {product: item})
      }>
      <ProductImage source={item.image} />
      <WishlistIcon onPress={() => toggleWishlist(item.id)}>
        <HeartIconImage
          source={
            wishlist.includes(item.id)
              ? Images.heartFilledIcon
              : Images.heartOutlineIcon
          }
        />
      </WishlistIcon>
      <DetailView>
        <SubTextBlack
          size={16}
          color={Colors.black}
          fontFamily={Fonts.ThemeRegular}
          fontWeight={500}
          numberOfLines={1}>
          {item.title}
        </SubTextBlack>

        <SubTextBlack
          size={10}
          color={Colors.black}
          fontFamily={Fonts.ThemeRegular}
          fontWeight={400}
          numberOfLines={2}>
          {item.description}
        </SubTextBlack>

        <PriceRow>
          <SubTextBlack
            size={12}
            color={Colors.black}
            fontFamily={Fonts.ThemeRegular}
            fontWeight={500}>
            {item.price}
          </SubTextBlack>

          <OriginalPrice>{item.originalPrice}</OriginalPrice>
        </PriceRow>
        <RatingRow>
          <StarRating rating={item.rating} />

          <SubTextBlack
            size={10}
            color={Colors.grayA4}
            fontFamily={Fonts.ThemeRegular}
            fontWeight={400}>
            {item.reviews.toLocaleString()}
          </SubTextBlack>
        </RatingRow>
      </DetailView>
    </CardTouchableOpacity>
  );

  return (
    <MainContainer>
      <SafeAreaViewTop />
      {/* <SafeAreaContainerView> */}
      <HeaderContainer>
        <TextInputView
          label={''}
          placeholder={localize('PM19')}
          value={''}
          returnKeyType={'done'}
          leftIcon={Images.searchIcon}
          leftIconStyle={styles.leftIconStyle}
          rightIcon={Images.voiceSearchIcon}
          iconStyle={styles.iconStyle}
          placeholderStyle={CommonStyles.placeholderStyle}
          style={styles.searchInput}
        />
      </HeaderContainer>

      <FilterRow>
        <FilterButton>
          <SubTextBlack
            size={12}
            color={Colors.black}
            fontFamily={Fonts.ThemeRegular}
            fontWeight={400}>
            {localize('PM60')}
          </SubTextBlack>
          <DownArrowImage source={Images.downArrowIcon} resizeMode="contain" />
        </FilterButton>
        <FilterButton>
          <SubTextBlack
            size={12}
            color={Colors.black}
            fontFamily={Fonts.ThemeRegular}
            fontWeight={400}>
            {localize('PM61')}
          </SubTextBlack>
          <DownArrowImage
            source={Images.FilterIcon}
            resizeMode="contain"
            style={styles.filterImageSize}
          />
        </FilterButton>
        <FilterButton>
          <SubTextBlack
            size={12}
            color={Colors.black}
            fontFamily={Fonts.ThemeRegular}
            fontWeight={400}>
            {localize('PM62')}
          </SubTextBlack>
          <DownArrowImage source={Images.downArrowIcon} resizeMode="contain" />
        </FilterButton>
        <FilterButton>
          <SubTextBlack
            size={12}
            color={Colors.black}
            fontFamily={Fonts.ThemeRegular}
            fontWeight={400}>
            {localize('PM63')}
          </SubTextBlack>
          <DownArrowImage source={Images.downArrowIcon} resizeMode="contain" />
        </FilterButton>
      </FilterRow>
      <Container>
        <FlatList
          data={products}
          keyExtractor={item => item.id}
          renderItem={renderItem}
          numColumns={2} // 2 items per row
          showsVerticalScrollIndicator={false}
        />
      </Container>
      {/* </SafeAreaContainerView> */}
    </MainContainer>
  );
}
