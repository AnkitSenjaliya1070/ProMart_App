import React, {useState} from 'react';
import CommonStyles, {
  MainContainer,
  SafeAreaViewTop,
  Separator,
  SeparatorH,
  SubTextBlack,
} from '../../../utils/theme/commonStyle';
import {
  BannerImage,
  BannerImages1,
  BannerImages2,
  Card,
  CardImage,
  Container,
  DealButton,
  DealCard,
  DeliveryTime,
  FastForwardImage,
  HeaderContainer,
  HeaderRow,
  HeaderTopContainer,
  HeartIcon,
  HeartIconImage,
  IconBox,
  IconButton,
  IconImage,
  ImageContainer,
  ImageWrapper,
  InfoRow,
  InfoSection,
  InfoWrapper,
  LeftSection,
  LocationIcon,
  OfferBadge,
  OfferBottomOverlay,
  OfferCard,
  OfferContainer,
  OfferImage,
  PercentImage,
  ProfileImage,
  RightIcon,
  RightSection,
  SavingsContainer,
  ScrollContainer,
  SectionHeader,
  SmallIconImage,
  Stars,
  styles,
  TopOffersRow,
  Wrapper,
} from './OffersScreenStyle';
import TextInputView from '../../../components/TextInputView/TextInputView';
import {localize} from '../../../functions/commonFunctions';
import {Colors, Fonts, Images} from '../../../utils/theme';
import {FlatList, ScrollView, TouchableOpacity} from 'react-native';
import StarRating from '../../../components/StarRating/StarRating';

const iconData = [
  {name: 'PROMART', source: Images.demo3Image},
  {name: 'NEAR ME', source: Images.demo3Image},
  {name: '10-Minute', source: Images.demo3Image},
  {name: 'Food', source: Images.demo3Image},
  {name: 'Home Service', source: Images.demo3Image},
  {name: 'Fastek', source: Images.demo3Image},
];

const promoImages = [
  Images.demo7Image,
  Images.demo8Image,
  Images.demo5Image,
  Images.demo5Image,
  Images.demo5Image,
];

const deals = [
  {
    titleTop: 'Up to',
    titleBottom: '60% OFF',
  },
  {
    titleTop: 'Trending',
    titleBottom: 'Deals',
  },
  {
    titleTop: 'Uncapped',
    titleBottom: 'Deals',
  },
  {
    titleTop: 'Up to',
    titleBottom: '60% OFF',
  },
];

const colors = [Colors.yellowFB, Colors.pinkFF, Colors.blueDE, Colors.redFD];
const btnColors = [
  Colors.yellowFF,
  Colors.pinkFF2,
  Colors.blue4F,
  Colors.redED2,
];

const offers = [
  {
    brand: 'DRESSBERRY',
    offer: 'MIN 60% OFF\n+5% EXTRA',
    image: Images.topOffersImage,
  },
  {
    brand: 'NOTHING',
    offer: 'MIN 60% OFF\n+5% EXTRA',
    image: Images.topOffersImage,
  },
  {
    brand: 'WHIRPOOL',
    offer: 'MIN 60% OFF\n+5% EXTRA',
    image: Images.topOffersImage,
  },
];

const offersNearYou = [
  {
    id: '1',
    title: 'Fresh Grilled Burger',
    subtitle: 'Autumn And Winter Casual cotton',
    price: '₹499',
    rating: 4.5,
    reviews: '6,890',
    time: '25–35 Mins',
    image:
      'https://cdn.pixabay.com/photo/2014/10/23/18/05/burger-500054_1280.jpg',
  },
  {
    id: '2',
    title: 'Fresh Grilled Burger',
    subtitle: 'Autumn And Winter Casual cotton',
    price: '₹499',
    rating: 4.5,
    reviews: '6,890',
    time: '25–35 Mins',
    image:
      'https://cdn.pixabay.com/photo/2014/10/23/18/05/burger-500054_1280.jpg',
  },
  {
    id: '3',
    title: 'Fresh Grilled Burger',
    subtitle: 'Autumn And Winter Casual cotton',
    price: '₹499',
    rating: 4.5,
    reviews: '6,890',
    time: '25–35 Mins',
    image:
      'https://cdn.pixabay.com/photo/2014/10/23/18/05/burger-500054_1280.jpg',
  },
];

export default function OffersScreen() {
  const [wishlist, setWishlist] = useState<string[]>([]);

  const toggleWishlist = (id: string) => {
    setWishlist(prev =>
      prev.includes(id) ? prev.filter(item => item !== id) : [...prev, id],
    );
  };

  const renderCard = ({item}:any) => (
    <Card>
      <ImageWrapper>
        <OfferBadge>
          {/* <Ionicon name="pricetag" size={16} color="#e60000" /> */}
          <SmallIconImage source={Images.tagIcon} resizeMode="cover" />
          <SeparatorH val={0.8} />
          <SubTextBlack
            size={14}
            color={Colors.redED2}
            fontFamily={Fonts.ThemeRegular}
            fontWeight={700}>
            30% OFF
          </SubTextBlack>
        </OfferBadge>
        <CardImage source={{uri: item.image}} />
        <HeartIcon onPress={() => toggleWishlist(item.id)}>
          <HeartIconImage
            source={
              wishlist.includes(item.id)
                ? Images.heartFilledIcon
                : Images.heartOutlineIcon
            }
          />
        </HeartIcon>
      </ImageWrapper>

      <InfoSection>
        <InfoRow>
          <SubTextBlack
            size={16}
            color={Colors.black}
            fontFamily={Fonts.ThemeRegular}
            fontWeight={500}>
            {item.title}
          </SubTextBlack>

          <SubTextBlack
            size={16}
            color={Colors.black}
            fontFamily={Fonts.ThemeRegular}
            fontWeight={500}>
            {item.price}
          </SubTextBlack>
        </InfoRow>

        <Separator val={0.1} />

        <InfoRow>
          <SubTextBlack
            size={10}
            color={Colors.black}
            fontFamily={Fonts.ThemeRegular}
            fontWeight={400}>
            {item.subtitle}
          </SubTextBlack>

          <Stars>
            <StarRating rating={item.rating} />

            <SeparatorH val={0.5} />

            <SubTextBlack
              size={10}
              color={Colors.grayA4}
              fontFamily={Fonts.ThemeRegular}
              fontWeight={400}>
              {item.reviews}
            </SubTextBlack>
          </Stars>
        </InfoRow>
        <Separator val={0.3} />
        <InfoRow>
          <SubTextBlack
            size={10}
            color={Colors.green4A}
            fontFamily={Fonts.ThemeRegular}
            fontWeight={600}>
            {localize('PM43')}
          </SubTextBlack>
          <DeliveryTime>
            <SmallIconImage source={Images.deliveredIcon} resizeMode="cover" />
            <SeparatorH val={1} />
            <SubTextBlack
              size={10}
              color={Colors.gray59}
              fontFamily={Fonts.ThemeRegular}
              fontWeight={600}>
              {item.time}
            </SubTextBlack>
          </DeliveryTime>
        </InfoRow>
      </InfoSection>
      <Separator val={0.5} />
    </Card>
  );

  return (
    <MainContainer>
      <SafeAreaViewTop />
      <HeaderContainer>
        <HeaderTopContainer>
          <LeftSection>
            <ProfileImage source={Images.demo3Image} />

            <SeparatorH val={1} />

            <LocationIcon source={Images.locationIcon} resizeMode="stretch" />
            <InfoWrapper>
              <SubTextBlack
                size={14}
                color={Colors.black}
                fontFamily={Fonts.ThemeRegular}
                fontWeight={600}>
                Nayanika Mishra
              </SubTextBlack>

              <SubTextBlack
                size={10}
                color={Colors.gray89}
                fontFamily={Fonts.ThemeRegular}
                fontWeight={400}>
                A-298, New Ashok Nagar, New Delhi
              </SubTextBlack>
            </InfoWrapper>
          </LeftSection>

          <RightSection>
            <IconButton>
              <RightIcon source={Images.bellIcon} resizeMode="contain" />
            </IconButton>
            <IconButton>
              <RightIcon source={Images.scannerIcon} />
            </IconButton>
          </RightSection>
        </HeaderTopContainer>

        <TextInputView
          label={''}
          placeholder={localize('PM57')}
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

      <ScrollView
        contentContainerStyle={CommonStyles.scrollContainer}
        showsHorizontalScrollIndicator={false}
        showsVerticalScrollIndicator={false}
        nestedScrollEnabled={true}>
        <Container>
          {iconData.map((item, idx) => (
            <IconBox key={idx}>
              <IconImage source={item.source} resizeMode="contain" />

              <Separator val={0.2} />

              <SubTextBlack
                size={8}
                color={Colors.black}
                fontFamily={Fonts.ThemeRegular}
                fontWeight={400}>
                {item.name}
              </SubTextBlack>
            </IconBox>
          ))}
        </Container>

        <ScrollContainer horizontal showsHorizontalScrollIndicator={false}>
          {promoImages.map((img, index) => (
            <BannerImage key={index} source={img} resizeMode="cover" />
          ))}
        </ScrollContainer>

        <Wrapper>
          {deals.map((deal, index) => (
            <DealCard key={index} bgColor={colors[index]}>
              <SubTextBlack
                size={14}
                color={Colors.black}
                fontFamily={Fonts.ThemeRegular}
                fontWeight={500}>
                {deal.titleTop}
              </SubTextBlack>

              <Separator val={0.3} />

              <SubTextBlack
                size={14}
                color={Colors.black}
                fontFamily={Fonts.ThemeRegular}
                fontWeight={700}>
                {deal.titleBottom}
              </SubTextBlack>
              <Separator val={0.3} />
              <DealButton btnColor={btnColors[index]}>
                <FastForwardImage
                  source={Images.fastForwardIcon}
                  resizeMode="contain"
                />
              </DealButton>
            </DealCard>
          ))}
        </Wrapper>

        <ImageContainer>
          <BannerImages1 source={Images.foundationImage} />

          <Separator val={1} />

          <BannerImages2 source={Images.skinCareImage} />
        </ImageContainer>

        <SavingsContainer>
          <PercentImage source={Images.discountImage} />

          <SeparatorH val={1} />

          <SubTextBlack
            size={16}
            color={Colors.black}
            fontFamily={Fonts.ThemeRegular}
            fontWeight={600}>
            August Savings
          </SubTextBlack>

          <SeparatorH val={1} />

          <SubTextBlack
            size={20}
            color={Colors.redED2}
            fontFamily={Fonts.ThemeRegular}
            fontWeight={700}>
            ₹2,567.99
          </SubTextBlack>
        </SavingsContainer>

        <Separator val={1} />

        <SectionHeader>
          <SubTextBlack
            size={16}
            color={Colors.black}
            fontFamily={Fonts.ThemeRegular}
            fontWeight={600}>
            {localize('PM58')}
          </SubTextBlack>

          <SubTextBlack
            size={14}
            color={Colors.redED2}
            fontFamily={Fonts.ThemeRegular}
            fontWeight={500}>
            {localize('PM5')}
          </SubTextBlack>
        </SectionHeader>

        <TopOffersRow>
          {offers.slice(0, 3).map((item, index) => (
            <OfferCard key={index}>
              <OfferImage source={item.image} resizeMode="cover" />
              <OfferBottomOverlay>
                <SubTextBlack
                  size={14}
                  color={Colors.white}
                  fontFamily={Fonts.ThemeRegular}
                  fontWeight={700}>
                  {item.brand}
                </SubTextBlack>

                <SubTextBlack
                  size={10}
                  color={Colors.white}
                  fontFamily={Fonts.ThemeRegular}
                  fontWeight={500}>
                  {item.offer}
                </SubTextBlack>
              </OfferBottomOverlay>
            </OfferCard>
          ))}
        </TopOffersRow>

        <Separator val={0.5} />

        <OfferContainer>
          <HeaderRow>
            <SubTextBlack
              size={16}
              color={Colors.black}
              fontFamily={Fonts.ThemeRegular}
              fontWeight={600}>
              {localize('PM59')}
            </SubTextBlack>

            <TouchableOpacity>
              <SubTextBlack
                size={14}
                color={Colors.redED2}
                fontFamily={Fonts.ThemeRegular}
                fontWeight={500}>
                {localize('PM5')}
              </SubTextBlack>
            </TouchableOpacity>
          </HeaderRow>

          <Separator val={0.8} />

          <FlatList
            data={offersNearYou}
            renderItem={renderCard}
            keyExtractor={item => item.id}
            showsVerticalScrollIndicator={false}
            // contentContainerStyle={{paddingBottom: 20}}
          />
        </OfferContainer>
      </ScrollView>
    </MainContainer>
  );
}
