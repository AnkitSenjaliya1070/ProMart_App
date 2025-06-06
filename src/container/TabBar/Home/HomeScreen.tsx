import React from 'react';
import {FlatList, ScrollView, View} from 'react-native';
import {
  BannerImage,
  BottomRow,
  Card,
  CardImageContainer,
  CarouselImage,
  CarouselImageCard,
  CarouselWrapper,
  CategoryCard,
  CategoryGridContainer,
  CategoryImage,
  CategoryImage1,
  CategoryImageRow,
  CategoryItem,
  CategoryWrapper,
  Container,
  DealBottomRow,
  DealCard,
  DealFinalPrice,
  DealImage,
  DealOriginalPrice,
  DealPriceRow,
  FashionCard,
  FashionCardImage,
  GroceryGridContainer,
  GroceryImage,
  GroceryItem,
  ImageContainer,
  ImageWrapper,
  MainCatView,
  MainCatViewRow,
  PaddingView,
  PriceText,
  ProductCard,
  ProductImage,
  ProductsWrapper,
  PromoCard,
  RightArrowIcon,
  RightArrowImage,
  Row,
  ScrollContainer,
  SlideImage,
  SlideImage1,
  SlideWrapper,
  Stars,
  StarView,
  Strike,
  StyledImage,
  styles,
  Subtitle,
  SwiperContainer,
  SwiperContainer1,
  SwiperContainer2,
  SwiperContainer3,
  SwiperContainer4,
  TextBox,
  ViewAllButton,
  VisualCard,
  VisualCardImage,
} from './HomeScreenStyle';
import HomeHeaderScreen from './HomeHeaderScreen';
import SafeAreaContainerView from '../../../components/SafeAreaContainerView/SafeAreaContainerView';
import CommonStyles, {
  Separator,
  SubTextBlack,
} from '../../../utils/theme/commonStyle';
import {Colors, Fonts, Images, Responsive} from '../../../utils/theme';
import Swiper from 'react-native-swiper';
import {localize} from '../../../functions/commonFunctions';
import Carousel from 'react-native-reanimated-carousel';

const images = [
  'https://picsum.photos/id/1018/600/400',
  'https://picsum.photos/id/1025/600/400',
  'https://picsum.photos/id/1037/600/400',
  'https://picsum.photos/id/1059/600/400',
];

const categories = [
  {
    title: 'Electronic Items',
    color: Colors.skyE0,
    images: [Images.staticImage],
  },
  {
    title: 'Computer',
    color: Colors.whiteF3,
    images: [Images.staticImage],
  },
  {
    title: 'Audio',
    color: Colors.greenF0,
    images: [Images.staticImage],
  },
];

const groceryItems = [
  {image: Images.groceryImage, label: 'Dairy, bake.'},
  {image: Images.groceryImage, label: 'Dairy, bake.'},
  {image: Images.groceryImage, label: 'Dairy, bake.'},
  {image: Images.groceryImage, label: 'Dairy, bake.'},
  {image: Images.groceryImage, label: 'Dairy, bake.'},
  {image: Images.groceryImage, label: 'Dairy, bake.'},
  {image: Images.groceryImage, label: 'Dairy, bake.'},
  {image: Images.groceryImage, label: 'Dairy, bake.'},
];

const topDealsData = [
  {
    id: '1',
    title: 'Spigen ultra Hybrid s black cover case.......',
    image: Images.oatsImage,
    originalPrice: '2,999.00',
    finalPrice: '2,999.00',
    discount: '60% off',
  },
  {
    id: '2',
    title: 'Spigen ultra Hybrid s black cover case.......',
    image: Images.oatsImage,
    originalPrice: '2,999.00',
    finalPrice: '2,999.00',
    discount: '60% off',
  },
  {
    id: '3',
    title: 'Spigen ultra Hybrid s black cover case.......',
    image: Images.oatsImage,
    originalPrice: '2,999.00',
    finalPrice: '2,999.00',
    discount: '60% off',
  },
  {
    id: '4',
    title: 'Spigen ultra Hybrid s black cover case.......',
    image: Images.oatsImage,
    originalPrice: '2,999.00',
    finalPrice: '2,999.00',
    discount: '60% off',
  },
  // Add more items
];

const visualCardItemData = [
  {
    id: '1',
    title: 'Sweatshirts, ho jac..',
    image: Images.bagsImage,
    finalPrice: '249',
  },
  {
    id: '2',
    title: 'Sweatshirts, ho jac..',
    image: Images.bagsImage,
    finalPrice: '249',
  },
  {
    id: '3',
    title: 'Sweatshirts, ho jac..',
    image: Images.bagsImage,
    finalPrice: '249',
  },
  {
    id: '4',
    title: 'Sweatshirts, ho jac..',
    image: Images.bagsImage,
    finalPrice: '249',
  },
];

const womensFashionData = [
  {
    id: '1',
    title: 'pair',
    image: Images.bagsImage,
  },
  {
    id: '2',
    title: 'T - shirts',
    image: Images.bagsImage,
  },
  {
    id: '3',
    title: 'Jump suit',
    image: Images.bagsImage,
  },
  {
    id: '4',
    title: 'Frock',
    image: Images.bagsImage,
  },
];

const GymData = [
  {
    id: '1',
    title: 'Ring',
    image: Images.demo2Image,
  },
  {
    id: '2',
    title: 'Necklace',
    image: Images.demo2Image,
  },
  {
    id: '3',
    title: 'Ear Ring',
    image: Images.demo2Image,
  },
  {
    id: '4',
    title: 'Bangles',
    image: Images.demo2Image,
  },
];

const FurnitureData = [
  {
    id: '1',
    title: 'Sofa',
    image: Images.demo3Image,
  },
  {
    id: '2',
    title: 'Dining table',
    image: Images.demo3Image,
  },
  {
    id: '3',
    title: 'Cupboard',
    image: Images.demo3Image,
  },
  {
    id: '4',
    title: 'Laptops',
    image: Images.demo3Image,
  },
];

const JewellryData = [
  {
    id: '1',
    title: 'Ring',
    image: Images.demo8Image,
  },
  {
    id: '2',
    title: 'Necklace',
    image: Images.demo8Image,
  },
  {
    id: '3',
    title: 'Ear Ring',
    image: Images.demo8Image,
  },
  {
    id: '4',
    title: 'Bangles',
    image: Images.demo8Image,
  },
];

const categories1 = [
  {name: 'Refrigerators', image: Images.demo3Image},
  {name: 'Oven & Toasters', image: Images.demo3Image},
  {name: 'Rice Cookers', image: Images.demo3Image},
  {name: 'Fryers', image: Images.demo3Image},
  {name: 'Coffee Machines', image: Images.demo3Image},
];

const products1 = [
  {image: Images.demo7Image},
  {image: Images.demo7Image},
  {image: Images.demo7Image},
];

const topPicksData = [
  {
    id: '1',
    title: 'Spigen ultra Hybrid s black cover case.......',
    image: Images.demo8Image,
    originalPrice: '2,999.00',
    finalPrice: '2,999.00',
    discount: '60% off',
  },
  {
    id: '2',
    title: 'Spigen ultra Hybrid s black cover case.......',
    image: Images.demo8Image,
    originalPrice: '2,999.00',
    finalPrice: '2,999.00',
    discount: '60% off',
  },
  {
    id: '3',
    title: 'Spigen ultra Hybrid s black cover case.......',
    image: Images.demo8Image,
    originalPrice: '2,999.00',
    finalPrice: '2,999.00',
    discount: '60% off',
  },
  {
    id: '4',
    title: 'Spigen ultra Hybrid s black cover case.......',
    image: Images.demo8Image,
    originalPrice: '2,999.00',
    finalPrice: '2,999.00',
    discount: '60% off',
  },
];

const topToysData = [
  {
    id: '1',
    title: 'Spigen ultra Hybrid s black cover case.......',
    image: Images.demo14Image,
    originalPrice: '2,999.00',
    finalPrice: '2,999.00',
    discount: '60% off',
  },
  {
    id: '2',
    title: 'Spigen ultra Hybrid s black cover case.......',
    image: Images.demo14Image,
    originalPrice: '2,999.00',
    finalPrice: '2,999.00',
    discount: '60% off',
  },
  {
    id: '3',
    title: 'Spigen ultra Hybrid s black cover case.......',
    image: Images.demo14Image,
    originalPrice: '2,999.00',
    finalPrice: '2,999.00',
    discount: '60% off',
  },
  {
    id: '4',
    title: 'Spigen ultra Hybrid s black cover case.......',
    image: Images.demo14Image,
    originalPrice: '2,999.00',
    finalPrice: '2,999.00',
    discount: '60% off',
  },
];

const topSellBookData = [
  {
    id: '1',
    title: 'Spigen ultra Hybrid s black cover case.......',
    image: Images.demo15Image,
    originalPrice: '2,999.00',
    finalPrice: '2,999.00',
    discount: '60% off',
  },
  {
    id: '2',
    title: 'Spigen ultra Hybrid s black cover case.......',
    image: Images.demo15Image,
    originalPrice: '2,999.00',
    finalPrice: '2,999.00',
    discount: '60% off',
  },
  {
    id: '3',
    title: 'Spigen ultra Hybrid s black cover case.......',
    image: Images.demo15Image,
    originalPrice: '2,999.00',
    finalPrice: '2,999.00',
    discount: '60% off',
  },
  {
    id: '4',
    title: 'Spigen ultra Hybrid s black cover case.......',
    image: Images.demo15Image,
    originalPrice: '2,999.00',
    finalPrice: '2,999.00',
    discount: '60% off',
  },
];

const sportsData = [
  {
    id: '1',
    title: 'Scooter',
    image: Images.demo16Image,
  },
  {
    id: '2',
    title: 'Bicycle',
    image: Images.demo16Image,
  },
  {
    id: '3',
    title: 'Boxing Gloves',
    image: Images.demo16Image,
  },
  {
    id: '4',
    title: 'badminton kit',
    image: Images.demo16Image,
  },
];

const HealthData = [
  {
    id: '1',
    title: 'Weighning Scale',
    image: Images.demo17Image,
  },
  {
    id: '2',
    title: 'First Aid',
    image: Images.demo17Image,
  },
  {
    id: '3',
    title: 'Nutrition Supplements',
    image: Images.demo17Image,
  },
  {
    id: '4',
    title: 'badminton kit',
    image: Images.demo17Image,
  },
];

const data2 = [
  {
    id: '1',
    title: 'Trendy Jeans',
    originalPrice: '$3499',
    discountedPrice: '$899',
    image: Images.demo3Image,
  },
  {
    id: '2',
    title: 'Trendy Jeans',
    originalPrice: '$3499',
    discountedPrice: '$899',
    image: Images.demo3Image,
  },
  {
    id: '3',
    title: 'Trendy Jeans',
    originalPrice: '$3499',
    discountedPrice: '$899',
    image: Images.demo3Image,
  },
  {
    id: '4',
    title: 'Trendy Jeans',
    originalPrice: '$3499',
    discountedPrice: '$899',
    image: Images.demo3Image,
  },
];

const promoImages = [
  Images.demo7Image,
  Images.demo8Image,
  Images.demo7Image,
  Images.demo8Image,
  Images.demo7Image,
  Images.demo8Image,
];

const carouselData = [
  {
    id: '1',
    image: Images.demo7Image,
    price: '$1499',
  },
  {
    id: '2',
    image: Images.demo7Image,
    price: '$1299',
  },
];

export default function HomeScreen() {
  const renderTopDealItem = ({item}: any) => (
    <DealCard>
      <DealImage source={item.image} resizeMode="cover" />
      <PaddingView>
        <SubTextBlack
          size={12}
          color={Colors.black}
          fontFamily={Fonts.ThemeRegular}
          fontWeight={400}
          numberOfLines={2}>
          {item.title}
        </SubTextBlack>
        <DealPriceRow>
          <DealOriginalPrice>${item.originalPrice}</DealOriginalPrice>
          <DealFinalPrice>${item.finalPrice}</DealFinalPrice>
        </DealPriceRow>
        <DealBottomRow>
          <StarView>
            <Stars source={Images.starIcon} />
            <Stars source={Images.starIcon} />
            <Stars source={Images.starIcon} />
            <Stars source={Images.starIcon} />
            <Stars source={Images.starIcon} />
          </StarView>
          <SubTextBlack
            size={12}
            color={Colors.black}
            fontFamily={Fonts.ThemeRegular}
            fontWeight={400}>
            {item.discount}
          </SubTextBlack>
        </DealBottomRow>
      </PaddingView>
    </DealCard>
  );

  const renderVisualCardItem = ({item}: any) => (
    <VisualCard>
      <VisualCardImage source={item.image} resizeMode="cover" />
      <Separator val={0.5}/>
      <SubTextBlack
        size={8}
        color={Colors.black}
        fontFamily={Fonts.ThemeRegular}
        fontWeight={500}
        numberOfLines={1}
        style={CommonStyles.centerText}>
        {item.title}
      </SubTextBlack>
      <SubTextBlack
        size={8}
        color={Colors.black}
        fontFamily={Fonts.ThemeRegular}
        fontWeight={500}
        style={CommonStyles.centerText}>
        From ${item.finalPrice}
      </SubTextBlack>
    </VisualCard>
  );

  const renderWomenFashionItem = ({item}: any) => (
    <FashionCard>
      <FashionCardImage source={item.image} resizeMode="cover" />
      <Separator val={0.4}/>
      <SubTextBlack
        size={10}
        color={Colors.black}
        fontFamily={Fonts.ThemeRegular}
        fontWeight={400}
        style={CommonStyles.centerText}
        numberOfLines={1}>
        {item.title}
      </SubTextBlack>
      <Separator val={0.4}/>
    </FashionCard>
  );

  const renderMenFashionItem = ({item}: any) => (
    <FashionCard>
      <FashionCardImage source={item.image} resizeMode="cover" />
      <Separator val={0.4}/>
      <SubTextBlack
        size={10}
        color={Colors.black}
        fontFamily={Fonts.ThemeRegular}
        fontWeight={400}
        style={CommonStyles.centerText}
        numberOfLines={1}>
        {item.title}
      </SubTextBlack>{' '}
      <Separator val={0.4}/>
    </FashionCard>
  );

  const renderKidFashionItem = ({item}: any) => (
    <FashionCard>
      <FashionCardImage source={item.image} resizeMode="cover" />
      <Separator val={0.4}/>
      <SubTextBlack
        size={10}
        color={Colors.black}
        fontFamily={Fonts.ThemeRegular}
        fontWeight={400}
        style={CommonStyles.centerText}
        numberOfLines={1}>
        {item.title}
      </SubTextBlack>{' '}
      <Separator val={0.4}/>
    </FashionCard>
  );

  const renderBeautyItem = ({item}: any) => (
    <FashionCard>
      <FashionCardImage source={item.image} resizeMode="cover" />
      <Separator val={0.4}/>
      <SubTextBlack
        size={10}
        color={Colors.black}
        fontFamily={Fonts.ThemeRegular}
        fontWeight={400}
        style={CommonStyles.centerText}
        numberOfLines={1}>
        {item.title}
      </SubTextBlack>{' '}
      <Separator val={0.4}/>
    </FashionCard>
  );

  const renderGymCollectionItem = ({item}: any) => (
    <FashionCard>
      <FashionCardImage source={item.image} resizeMode="cover" />
      <Separator val={0.4}/>
      <SubTextBlack
        size={10}
        color={Colors.black}
        fontFamily={Fonts.ThemeRegular}
        fontWeight={400}
        style={CommonStyles.centerText}
        numberOfLines={1}>
        {item.title}
      </SubTextBlack>{' '}
      <Separator val={0.4}/>
    </FashionCard>
  );

  const renderFurnitureItem = ({item}: any) => (
    <FashionCard>
      <FashionCardImage source={item.image} resizeMode="cover" />
      <Separator val={0.4}/>
      <SubTextBlack
        size={10}
        color={Colors.black}
        fontFamily={Fonts.ThemeRegular}
        fontWeight={400}
        style={CommonStyles.centerText}
        numberOfLines={1}>
        {item.title}
      </SubTextBlack>{' '}
      <Separator val={0.4}/>
    </FashionCard>
  );

  const renderJewellryItem = ({item}: any) => (
    <FashionCard>
      <FashionCardImage source={item.image} resizeMode="cover" />
      <Separator val={0.4}/>
      <SubTextBlack
        size={10}
        color={Colors.black}
        fontFamily={Fonts.ThemeRegular}
        fontWeight={400}
        style={CommonStyles.centerText}
        numberOfLines={2}>
        {item.title}
      </SubTextBlack>{' '}
      <Separator val={0.4}/>
    </FashionCard>
  );

  // eslint-disable-next-line react/no-unstable-nested-components
  const CarouselrenderItem = ({item}: any) => (
    <CarouselImageCard>
      <ImageWrapper>
        <CarouselImage source={item.image} resizeMode="cover" />
      </ImageWrapper>
      <BottomRow>
        <PriceText>
          {localize('PM72')} {item.price}
        </PriceText>
        <RightArrowIcon source={Images.rightArrowIcon} resizeMode="contain" />
      </BottomRow>
    </CarouselImageCard>
  );

  return (
    <Container>
      <SafeAreaContainerView>
        {/* Header Part */}
        <HomeHeaderScreen />

        <ScrollView
          contentContainerStyle={CommonStyles.scrollContainer}
          showsHorizontalScrollIndicator={false}
          showsVerticalScrollIndicator={false}
          nestedScrollEnabled={true}>
          <Swiper
            autoplay
            autoplayTimeout={4}
            // showsPagination
            showsPagination={false}
            height={180}
            dotColor={Colors.white}
            activeDotColor={Colors.grayC7}>
            {images.map((image, index) => (
              <SlideWrapper key={index}>
                <SlideImage1 source={{uri: image}} />
              </SlideWrapper>
            ))}
          </Swiper>

          {/* Category Grid Section */}
          <CategoryGridContainer>
            {categories.map((cat, index) => (
              <CategoryCard key={index} style={{backgroundColor: cat.color}}>
                <CategoryImageRow>
                  <CategoryImage source={cat.images[0]} />
                  <CategoryImage source={cat.images[0]} />
                </CategoryImageRow>
                <CategoryImageRow>
                  <CategoryImage source={cat.images[0]} />
                  <CategoryImage source={cat.images[0]} />
                </CategoryImageRow>
                <SubTextBlack
                  size={8}
                  color={Colors.black}
                  // fontFamily={Fonts.ThemeRegular}
                  fontWeight={500}>
                  {cat.title}
                </SubTextBlack>
              </CategoryCard>
            ))}
          </CategoryGridContainer>
          <Separator val={0.5} />

          <SwiperContainer1>
            <SlideImage1
              source={Images.demo13Image}
              style={styles.image2Style}
            />

            <Separator val={1} />
            {/* Grocery Shopping */}
            <View>
              <SubTextBlack
                size={18}
                color={Colors.black}
                fontFamily={Fonts.ThemeRegular}
                fontWeight={700}>
                {localize('PM3')}
              </SubTextBlack>
              <Separator val={1} />
              <GroceryGridContainer>
                {groceryItems.map((item, index) => (
                  <GroceryItem key={index}>
                    <GroceryImage source={item.image} />
                    <Separator val={0.5} />

                    <SubTextBlack
                      size={10}
                      color={Colors.black}
                      fontFamily={Fonts.ThemeRegular}
                      fontWeight={500}
                      numberOfLines={1}>
                      {item.label}
                    </SubTextBlack>
                  </GroceryItem>
                ))}
              </GroceryGridContainer>
            </View>
          </SwiperContainer1>

          {/* Top Deals in grocery */}
          <MainCatView>
            <MainCatViewRow>
              <SubTextBlack
                size={18}
                color={Colors.black}
                fontFamily={Fonts.ThemeMedium}
                fontWeight={500}
                numberOfLines={1}>
                {localize('PM4')}
              </SubTextBlack>
              <ViewAllButton onPress={() => {}}>
                <SubTextBlack
                  size={12}
                  color={Colors.black}
                  fontFamily={Fonts.ThemeRegular}
                  fontWeight={400}>
                  {localize('PM5')}
                </SubTextBlack>
                <RightArrowImage source={Images.rightArrowIcon} />
              </ViewAllButton>
            </MainCatViewRow>

            <Separator val={0.5} />

            <FlatList
              horizontal
              data={topDealsData}
              renderItem={renderTopDealItem}
              keyExtractor={item => item.id}
              showsHorizontalScrollIndicator={false}
            />
          </MainCatView>

          <Separator val={1} />

          <SlideWrapper>
            <SlideImage1
              source={Images.demo19Image}
              style={styles.image1Style}
              resizeMode="contain"
            />
          </SlideWrapper>

          <Separator val={1} />

          {/* Recommended For you */}
          <MainCatView>
            <MainCatViewRow>
              <SubTextBlack
                size={18}
                color={Colors.black}
                fontFamily={Fonts.ThemeMedium}
                fontWeight={500}>
                {localize('PM6')}
              </SubTextBlack>
              <ViewAllButton onPress={() => {}}>
                <SubTextBlack
                  size={12}
                  color={Colors.black}
                  fontFamily={Fonts.ThemeRegular}
                  fontWeight={400}>
                  {localize('PM5')}
                </SubTextBlack>
                <RightArrowImage source={Images.rightArrowIcon} />
              </ViewAllButton>
            </MainCatViewRow>

            <Separator val={0.5} />

            <FlatList
              horizontal
              data={topDealsData}
              renderItem={renderTopDealItem}
              keyExtractor={item => item.id}
              showsHorizontalScrollIndicator={false}
            />
          </MainCatView>

          <ScrollContainer horizontal showsHorizontalScrollIndicator={false}>
            {promoImages.map((img, index) => (
              <BannerImage key={index} source={img} resizeMode="cover" />
            ))}
          </ScrollContainer>

          <MainCatView>
            <FlatList
              horizontal
              data={visualCardItemData}
              renderItem={renderVisualCardItem}
              keyExtractor={item => item.id}
              showsHorizontalScrollIndicator={false}
            />
          </MainCatView>

          <Separator val={1} />

          <Row>
            {data2.map(item => (
              <Card key={item.id}>
                <CardImageContainer>
                  <StyledImage source={item.image} />
                  <TextBox>
                    <SubTextBlack
                      size={8}
                      color={Colors.black}
                      // fontFamily={Fonts.ThemeRegular}
                      fontWeight={500}>
                      {item.title}
                    </SubTextBlack>
                    <Subtitle>
                      FLAT <Strike>{item.originalPrice}</Strike>{' '}
                      {item.discountedPrice}
                    </Subtitle>
                  </TextBox>
                </CardImageContainer>
              </Card>
            ))}
          </Row>

          <Separator val={1} />

          {/* Women's Fashion Item */}
          <MainCatView>
            <MainCatViewRow>
              <SubTextBlack
                size={16}
                color={Colors.black}
                fontFamily={Fonts.ThemeMedium}
                fontWeight={500}>
                {localize('PM7')}
              </SubTextBlack>
              <ViewAllButton onPress={() => {}}>
                <SubTextBlack
                  size={12}
                  color={Colors.black}
                  fontFamily={Fonts.ThemeRegular}
                  fontWeight={400}>
                  {localize('PM5')}
                </SubTextBlack>
                <RightArrowImage source={Images.rightArrowIcon} />
              </ViewAllButton>
            </MainCatViewRow>

            <Separator val={0.5} />

            <FlatList
              horizontal
              data={womensFashionData}
              renderItem={renderWomenFashionItem}
              keyExtractor={item => item.id}
              showsHorizontalScrollIndicator={false}
              scrollEnabled={false}
            />
          </MainCatView>

          <Separator val={1} />

          {/* Men's Fashion Item */}
          <MainCatView>
            <MainCatViewRow>
              <SubTextBlack
                size={16}
                color={Colors.black}
                fontFamily={Fonts.ThemeMedium}
                fontWeight={500}>
                {localize('PM8')}
              </SubTextBlack>{' '}
              <ViewAllButton onPress={() => {}}>
                <SubTextBlack
                  size={12}
                  color={Colors.black}
                  fontFamily={Fonts.ThemeRegular}
                  fontWeight={400}>
                  {localize('PM5')}
                </SubTextBlack>{' '}
                <RightArrowImage source={Images.rightArrowIcon} />
              </ViewAllButton>
            </MainCatViewRow>

            <Separator val={0.5} />

            <FlatList
              horizontal
              data={womensFashionData}
              renderItem={renderMenFashionItem}
              keyExtractor={item => item.id}
              showsHorizontalScrollIndicator={false}
              scrollEnabled={false}
            />
          </MainCatView>

          <Separator val={1} />

          {/* Kid's Fashion Item */}
          <MainCatView>
            <MainCatViewRow>
              <SubTextBlack
                size={16}
                color={Colors.black}
                fontFamily={Fonts.ThemeMedium}
                fontWeight={500}>
                {localize('PM9')}
              </SubTextBlack>{' '}
              <ViewAllButton onPress={() => {}}>
                <SubTextBlack
                  size={12}
                  color={Colors.black}
                  fontFamily={Fonts.ThemeRegular}
                  fontWeight={400}>
                  {localize('PM5')}
                </SubTextBlack>{' '}
                <RightArrowImage source={Images.rightArrowIcon} />
              </ViewAllButton>
            </MainCatViewRow>

            <Separator val={0.5} />

            <FlatList
              horizontal
              data={womensFashionData}
              renderItem={renderKidFashionItem}
              keyExtractor={item => item.id}
              showsHorizontalScrollIndicator={false}
              scrollEnabled={false}
            />
          </MainCatView>

          <Separator val={1} />

          {/* Beauty Item */}
          <MainCatView>
            <MainCatViewRow>
              <SubTextBlack
                size={16}
                color={Colors.black}
                fontFamily={Fonts.ThemeMedium}
                fontWeight={500}>
                {localize('PM10')}
              </SubTextBlack>{' '}
              <ViewAllButton onPress={() => {}}>
                <SubTextBlack
                  size={12}
                  color={Colors.black}
                  fontFamily={Fonts.ThemeRegular}
                  fontWeight={400}>
                  {localize('PM5')}
                </SubTextBlack>{' '}
                <RightArrowImage source={Images.rightArrowIcon} />
              </ViewAllButton>
            </MainCatViewRow>

            <Separator val={0.5} />

            <FlatList
              horizontal
              data={womensFashionData}
              renderItem={renderBeautyItem}
              keyExtractor={item => item.id}
              showsHorizontalScrollIndicator={false}
              scrollEnabled={false}
            />
          </MainCatView>

          <Separator val={1.2} />

          <MainCatView>
            {/* <MainCatViewRow> */}
            <SubTextBlack
              size={18}
              color={Colors.black}
              // fontFamily={Fonts.ThemeRegular}
              fontWeight={600}>
              {localize('PM71')}
            </SubTextBlack>
            {/* </MainCatViewRow> */}
          </MainCatView>

          <CarouselWrapper>
            {/* <Carousel
                ref={carouselRef}
                data={carouselData}
                renderItem={CarouselrenderItem}
                sliderWidth={Responsive.widthPercentageToDP('100')}
                itemWidth={Responsive.widthPercentageToDP('85')}
                inactiveSlideScale={0.95}
                inactiveSlideOpacity={0.7}
                loop={true}
                autoplay={true}
                autoplayDelay={500}
                autoplayInterval={3000}
                contentContainerCustomStyle={{paddingVertical: 10}}
              /> */}

            <Carousel
              width={Responsive.widthPercentageToDP('92')}
              height={Responsive.heightPercentageToDP('30')}
              autoPlay={true}
              data={carouselData}
              scrollAnimationDuration={1000}
              renderItem={CarouselrenderItem}
              style={CommonStyles.centerItem}
              mode="parallax"
              loop
              modeConfig={{
                parallaxScrollingScale: 0.9,
                parallaxScrollingOffset: 60,
                parallaxAdjacentItemScale: 0.8,
              }}
            />
          </CarouselWrapper>

          <Separator val={1} />

          <SwiperContainer>
            <SlideImage source={Images.demo1Image} />
          </SwiperContainer>

          <Separator val={1} />

          {/* Gym collection*/}
          <MainCatView>
            <MainCatViewRow>
              <SubTextBlack
                size={16}
                color={Colors.black}
                fontFamily={Fonts.ThemeMedium}
                fontWeight={500}>
                {localize('PM11')}
              </SubTextBlack>
              <ViewAllButton onPress={() => {}}>
                <SubTextBlack
                  size={12}
                  color={Colors.black}
                  fontFamily={Fonts.ThemeRegular}
                  fontWeight={400}>
                  {localize('PM5')}
                </SubTextBlack>{' '}
                <RightArrowImage source={Images.rightArrowIcon} />
              </ViewAllButton>
            </MainCatViewRow>

            <Separator val={0.5} />

            <FlatList
              horizontal
              data={GymData}
              renderItem={renderGymCollectionItem}
              keyExtractor={item => item.id}
              showsHorizontalScrollIndicator={false}
              scrollEnabled={false}
            />
          </MainCatView>

          <Separator val={1} />

          {/* Furniture Items*/}
          <MainCatView>
            <MainCatViewRow>
              <SubTextBlack
                size={16}
                color={Colors.black}
                fontFamily={Fonts.ThemeMedium}
                fontWeight={500}>
                {localize('PM12')}
              </SubTextBlack>{' '}
              <ViewAllButton onPress={() => {}}>
                <SubTextBlack
                  size={12}
                  color={Colors.black}
                  fontFamily={Fonts.ThemeRegular}
                  fontWeight={400}>
                  {localize('PM5')}
                </SubTextBlack>{' '}
                <RightArrowImage source={Images.rightArrowIcon} />
              </ViewAllButton>
            </MainCatViewRow>

            <Separator val={0.5} />

            <FlatList
              horizontal
              data={FurnitureData}
              renderItem={renderFurnitureItem}
              keyExtractor={item => item.id}
              showsHorizontalScrollIndicator={false}
              scrollEnabled={false}
            />
          </MainCatView>

          <Separator val={1} />

          <SwiperContainer>
            <SlideImage source={Images.demo4Image} />
          </SwiperContainer>

          <Separator val={0.5} />

          <ImageContainer>
            <PromoCard source={Images.demo5Image} />
            <PromoCard source={Images.demo5Image} />
          </ImageContainer>

          <Separator val={0.5} />

          <SlideWrapper>
            <SlideImage
              source={Images.demo6Image}
              style={styles.image1Style}
              resizeMode="contain"
            />
          </SlideWrapper>

          <Separator val={0.5} />

          <CategoryWrapper>
            {categories1.map((item, index) => (
              <CategoryItem key={index}>
                <CategoryImage1 source={item.image} />
                <SubTextBlack
                  size={8}
                  color={Colors.black}
                  fontFamily={Fonts.ThemeRegular}
                  fontWeight={400}>
                  {item.name}
                </SubTextBlack>
              </CategoryItem>
            ))}
          </CategoryWrapper>

          <Separator val={1} />

          {/* Products */}
          <ProductsWrapper>
            {products1.map((item, index) => (
              <ProductCard key={index}>
                <ProductImage source={item.image} resizeMode="contain" />
              </ProductCard>
            ))}
          </ProductsWrapper>

          <Separator val={1} />

          {/* Jewellry*/}
          <MainCatView>
            <MainCatViewRow>
              <SubTextBlack
                size={16}
                color={Colors.black}
                fontFamily={Fonts.ThemeMedium}
                fontWeight={500}>
                {localize('PM13')}
              </SubTextBlack>{' '}
              <ViewAllButton onPress={() => {}}>
                <SubTextBlack
                  size={12}
                  color={Colors.black}
                  fontFamily={Fonts.ThemeRegular}
                  fontWeight={400}>
                  {localize('PM5')}
                </SubTextBlack>{' '}
                <RightArrowImage source={Images.rightArrowIcon} />
              </ViewAllButton>
            </MainCatViewRow>

            <Separator val={0.5} />

            <FlatList
              horizontal
              data={JewellryData}
              renderItem={renderJewellryItem}
              keyExtractor={item => item.id}
              showsHorizontalScrollIndicator={false}
              scrollEnabled={false}
            />
          </MainCatView>

          <Separator val={1} />

          <SwiperContainer2>
            <SlideImage source={Images.demo9Image} />
          </SwiperContainer2>

          <Separator val={1} />

          <SwiperContainer3>
            <SlideImage source={Images.demo10Image} />
          </SwiperContainer3>

          <Separator val={1} />

          <SwiperContainer4>
            <SlideImage source={Images.demo11Image} />
          </SwiperContainer4>

          <Separator val={1} />

          <SwiperContainer>
            <SlideImage source={Images.demo12Image} />
          </SwiperContainer>

          <Separator val={1} />

          <SwiperContainer1>
            <SlideImage1
              source={Images.demo13Image}
              style={styles.image2Style}
            />
          </SwiperContainer1>

          <Separator val={1} />

          {/*  Top Picks */}
          <MainCatView>
            <MainCatViewRow>
              <SubTextBlack
                size={16}
                color={Colors.black}
                fontFamily={Fonts.ThemeMedium}
                fontWeight={500}>
                {localize('PM14')}
              </SubTextBlack>{' '}
              <ViewAllButton onPress={() => {}}>
                <SubTextBlack
                  size={12}
                  color={Colors.black}
                  fontFamily={Fonts.ThemeRegular}
                  fontWeight={400}>
                  {localize('PM5')}
                </SubTextBlack>{' '}
                <RightArrowImage source={Images.rightArrowIcon} />
              </ViewAllButton>
            </MainCatViewRow>

            <Separator val={0.5} />

            <FlatList
              horizontal
              data={topPicksData}
              renderItem={renderTopDealItem}
              keyExtractor={item => item.id}
              showsHorizontalScrollIndicator={false}
            />
          </MainCatView>

          <Separator val={1} />

          {/*  Top toys collection */}
          <MainCatView>
            <MainCatViewRow>
              <SubTextBlack
                size={16}
                color={Colors.black}
                fontFamily={Fonts.ThemeMedium}
                fontWeight={500}>
                {localize('PM15')}
              </SubTextBlack>{' '}
              <ViewAllButton onPress={() => {}}>
                <SubTextBlack
                  size={12}
                  color={Colors.black}
                  fontFamily={Fonts.ThemeRegular}
                  fontWeight={400}>
                  {localize('PM5')}
                </SubTextBlack>{' '}
                <RightArrowImage source={Images.rightArrowIcon} />
              </ViewAllButton>
            </MainCatViewRow>

            <Separator val={0.5} />

            <FlatList
              horizontal
              data={topToysData}
              renderItem={renderTopDealItem}
              keyExtractor={item => item.id}
              showsHorizontalScrollIndicator={false}
            />
          </MainCatView>

          <Separator val={1} />

          {/* Top Selling Books */}
          <MainCatView>
            <MainCatViewRow>
              <SubTextBlack
                size={16}
                color={Colors.black}
                fontFamily={Fonts.ThemeMedium}
                fontWeight={500}>
                {localize('PM16')}
              </SubTextBlack>{' '}
              <ViewAllButton onPress={() => {}}>
                <SubTextBlack
                  size={12}
                  color={Colors.black}
                  fontFamily={Fonts.ThemeRegular}
                  fontWeight={400}>
                  {localize('PM5')}
                </SubTextBlack>{' '}
                <RightArrowImage source={Images.rightArrowIcon} />
              </ViewAllButton>
            </MainCatViewRow>

            <Separator val={0.5} />

            <FlatList
              horizontal
              data={topSellBookData}
              renderItem={renderTopDealItem}
              keyExtractor={item => item.id}
              showsHorizontalScrollIndicator={false}
            />
          </MainCatView>

          <Separator val={1} />

          {/* Sports Items*/}
          <MainCatView>
            <MainCatViewRow>
              <SubTextBlack
                size={16}
                color={Colors.black}
                fontFamily={Fonts.ThemeMedium}
                fontWeight={500}>
                {localize('PM17')}
              </SubTextBlack>{' '}
              <ViewAllButton onPress={() => {}}>
                <SubTextBlack
                  size={12}
                  color={Colors.black}
                  fontFamily={Fonts.ThemeRegular}
                  fontWeight={400}>
                  {localize('PM5')}
                </SubTextBlack>{' '}
                <RightArrowImage source={Images.rightArrowIcon} />
              </ViewAllButton>
            </MainCatViewRow>

            <Separator val={0.5} />

            <FlatList
              horizontal
              data={sportsData}
              renderItem={renderJewellryItem}
              keyExtractor={item => item.id}
              showsHorizontalScrollIndicator={false}
              scrollEnabled={false}
            />
          </MainCatView>

          <Separator val={1} />

          {/* Health & Nutrition */}
          <MainCatView>
            <MainCatViewRow>
              <SubTextBlack
                size={16}
                color={Colors.black}
                fontFamily={Fonts.ThemeMedium}
                fontWeight={500}>
                {localize('PM18')}
              </SubTextBlack>{' '}
              <ViewAllButton onPress={() => {}}>
                <SubTextBlack
                  size={12}
                  color={Colors.black}
                  fontFamily={Fonts.ThemeRegular}
                  fontWeight={400}>
                  {localize('PM5')}
                </SubTextBlack>{' '}
                <RightArrowImage source={Images.rightArrowIcon} />
              </ViewAllButton>
            </MainCatViewRow>

            <Separator val={0.5} />

            <FlatList
              horizontal
              data={HealthData}
              renderItem={renderJewellryItem}
              keyExtractor={item => item.id}
              showsHorizontalScrollIndicator={false}
              scrollEnabled={false}
            />
          </MainCatView>

          <Separator val={1} />

          <SwiperContainer2>
            <SlideImage source={Images.demo18Image} />
          </SwiperContainer2>
        </ScrollView>
      </SafeAreaContainerView>
    </Container>
  );
}
