import {
  Avatar,
  BottomBar,
  BuyNowButton,
  Container,
  DataRowView,
  DownArrowImage,
  EMIWrapper,
  FeatureCard,
  FeatureWrapper,
  HeaderContainer,
  IconBox,
  IconImage,
  ImageContainer,
  ImagesList,
  Info,
  ItemSeparator,
  LeftSide,
  LeftView,
  MemoryOption,
  MoneyEMIImage,
  MoreButton,
  OfferImage,
  PriceRow,
  QuantitySelector,
  RatingRow,
  RatingText,
  ReviewContainer,
  ReviewImage,
  RightArrowImage,
  RightView,
  Row,
  SpecContainer,
  SpecRow,
  styles,
  ViewMoreTouchableOpacity,
} from './ProductDeatlisScreenStyle';
import {useState} from 'react';
import StarRating from '../../../../components/StarRating/StarRating';
import CommonStyles, {
  MainContainer,
  SafeAreaContView,
  SafeAreaViewTop,
  Separator,
  SeparatorH,
  SubTextBlack,
} from '../../../../utils/theme/commonStyle';
import TextInputView from '../../../../components/TextInputView/TextInputView';
import {localize} from '../../../../functions/commonFunctions';
import {Colors, Fonts, Images} from '../../../../utils/theme';
import {ParamListBase, useNavigation} from '@react-navigation/native';
import {NativeStackNavigationProp} from '@react-navigation/native-stack';
import ProductImageCarousel from '../../../../components/ProductImageCarousel/ProductImageCarousel';

const specifications = [
  {label: 'Colour', value: 'Black'},
  {label: 'SIM Count', value: 'Dual SIM'},
  {label: 'SIM Count', value: 'Nano SIM'},
  {label: 'Operating System', value: 'Android'},
  {label: 'Network Type', value: '5G'},
  {label: 'Mobile Screen Size', value: '6.5 Inches & Above'},
  {label: 'Mobile Bettery Capacity', value: '5000 mAH & Above'},
  {label: 'Creamera Type', value: 'Primary Camera +Secondary Camera'},
  {label: 'Primary Camera', value: '64 MP & Above'},
];

const review = {
  name: 'Veronika',
  timeAgo: '3 months ago',
  rating: 4,
  text: `I recently ordered the Samsung Galaxy S24 Ultra online, and I'm thoroughly impressed. The phone's build quality is top-notch, with a sleek design that feels premium in hand. The 6.8-inch AMOLED display is stunning, offering vibrant colors and sharpness.`,
  images: [
    {id: '1', src: Images.demo7Image},
    {id: '2', src: Images.demo7Image},
    {id: '3', src: Images.demo7Image},
  ],
  avatar: Images.demo3Image,
};

export default function ProductDetailsScreen({route}: any) {
  const {product} = route.params;

  const navigation = useNavigation<NativeStackNavigationProp<ParamListBase>>();

  const [showAllSpecs, setShowAllSpecs] = useState(false);
  const [expanded, setExpanded] = useState(false);
  const [selectedMemory, setSelectedMemory] = useState('256 GB');

  const memoryOptions = ['1024 GB', '512 GB', '256 GB'];

  return (
    <SafeAreaContView>
      <MainContainer>
        <SafeAreaViewTop />
        <HeaderContainer>
          <TextInputView
            label={''}
            placeholder={localize('PM21')}
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
        <Container>
          <SubTextBlack
            size={14}
            color={Colors.black}
            fontFamily={Fonts.ThemeRegular}
            fontWeight={500}>
            Samsung
          </SubTextBlack>

          <SubTextBlack
            size={16}
            color={Colors.gray00}
            fontFamily={Fonts.ThemeRegular}
            fontWeight={300}>
            Galaxy S24 Ultra Dual SIM Titanium Gray 12GB RAM 256 5G -MIddle East
            Version
          </SubTextBlack>
          {/* <ProductImage source={product.image} resizeMode="contain" /> */}

          <ProductImageCarousel
            images={[Images.demo3Image, Images.demo4Image, Images.demo5Image, Images.demo4Image, Images.demo7Image]}
          />

          <Separator val={2} />

          <ItemSeparator />
          <Row>
            <LeftSide>
              <SubTextBlack
                size={16}
                color={Colors.black}
                fontFamily={Fonts.ThemeRegular}
                fontWeight={300}>
                {localize('PM22')} {': '}
              </SubTextBlack>

              <SubTextBlack
                size={16}
                color={Colors.black}
                fontFamily={Fonts.ThemeRegular}
                fontWeight={500}>
                Titanium Black
              </SubTextBlack>
            </LeftSide>

            <SubTextBlack
              size={18}
              color={Colors.grayB9}
              fontFamily={Fonts.ThemeRegular}
              fontWeight={400}>
              4 more
            </SubTextBlack>
          </Row>
          <ItemSeparator />

          <RatingRow>
            <LeftSide>
              <StarRating rating={product.rating} />
              <RatingText>{product.reviews.toLocaleString()}</RatingText>
            </LeftSide>

            <SubTextBlack
              size={12}
              color={Colors.green4A}
              fontFamily={Fonts.ThemeRegular}
              fontWeight={600}>
              {localize('PM23')}
            </SubTextBlack>
          </RatingRow>

          <SubTextBlack
            size={20}
            color={Colors.black}
            fontFamily={Fonts.ThemeRegular}
            fontWeight={600}>
            Samsung S24 Ultra 5G
          </SubTextBlack>
          <SubTextBlack
            size={18}
            color={Colors.gray99}
            fontFamily={Fonts.ThemeRegular}
            fontWeight={400}>
            (Titanium Gray)
          </SubTextBlack>

          <PriceRow>
            <SubTextBlack
              size={18}
              color={Colors.grayB9}
              fontFamily={Fonts.ThemeRegular}
              fontWeight={400}>
              {localize('PM24')}
            </SubTextBlack>
            <SeparatorH val={0.5} />
            <SubTextBlack
              size={18}
              color={Colors.grayB9}
              fontFamily={Fonts.ThemeRegular}
              fontWeight={400}
              style={CommonStyles.textDecoration}>
              {/* {product.originalPrice} */}
              ₹1,44,999
            </SubTextBlack>
            <SeparatorH val={0.5} />
            <SubTextBlack
              size={20}
              color={Colors.black}
              fontFamily={Fonts.ThemeRegular}
              fontWeight={600}>
              {/* {product.price} */}
              ₹1,39,999
            </SubTextBlack>
          </PriceRow>

          <Separator val={0.5} />

          <SubTextBlack
            size={20}
            color={Colors.black}
            fontFamily={Fonts.ThemeRegular}
            fontWeight={500}>
            {localize('PM25')}
          </SubTextBlack>

          <Row>
            {memoryOptions.map(memory => (
              <MemoryOption
                key={memory}
                selected={selectedMemory === memory}
                onPress={() => setSelectedMemory(memory)}>
                <SubTextBlack
                  size={20}
                  color={Colors.grayA6}
                  fontFamily={Fonts.ThemeRegular}
                  fontWeight={300}>
                  {memory}
                </SubTextBlack>
              </MemoryOption>
            ))}
          </Row>

          <Separator val={1} />

          <EMIWrapper>
            <DataRowView>
              <MoneyEMIImage source={Images.moneyEmiIcon} resizeMode="cover" />
              <SubTextBlack
                size={14}
                color={Colors.black}
                fontFamily={Fonts.ThemeRegular}
                fontWeight={400}
                numberOfLines={2}
                style={CommonStyles.flex}>
                Get it on 0% interest installments for ₹5000 per month
              </SubTextBlack>
              <RightArrowImage
                source={Images.rightArrowIcon}
                resizeMode="contain"
              />
            </DataRowView>
          </EMIWrapper>

          <Separator val={1} />

          {/* Features Box */}
          <FeatureWrapper>
            <FeatureCard>
              <IconBox>
                <IconImage
                  source={Images.freeShippingIcon}
                  resizeMode="cover"
                />
              </IconBox>
              <SubTextBlack
                size={10}
                color={Colors.black}
                fontFamily={Fonts.ThemeRegular}
                fontWeight={400}
                numberOfLines={2}
                style={CommonStyles.centerText}>
                {localize('PM26')}
              </SubTextBlack>
            </FeatureCard>

            <FeatureCard>
              <IconBox>
                <IconImage source={Images.starRatingIcon} resizeMode="cover" />
              </IconBox>
              <SubTextBlack
                size={10}
                color={Colors.black}
                fontFamily={Fonts.ThemeRegular}
                fontWeight={400}
                numberOfLines={2}
                style={CommonStyles.centerText}>
                {localize('PM27')}
              </SubTextBlack>
            </FeatureCard>

            <FeatureCard>
              <IconBox>
                <IconImage source={Images.returnIcon} resizeMode="cover" />
              </IconBox>
              <SubTextBlack
                size={10}
                color={Colors.black}
                fontFamily={Fonts.ThemeRegular}
                fontWeight={400}
                numberOfLines={2}
                style={CommonStyles.centerText}>
                {localize('PM28')}
              </SubTextBlack>
            </FeatureCard>

            <FeatureCard>
              <IconBox>
                <IconImage
                  source={Images.cashOnDeliveryIcon}
                  resizeMode="cover"
                />
              </IconBox>
              <SubTextBlack
                size={10}
                color={Colors.black}
                fontFamily={Fonts.ThemeRegular}
                fontWeight={400}
                numberOfLines={2}
                style={CommonStyles.centerText}>
                {localize('PM29')}
              </SubTextBlack>
            </FeatureCard>
          </FeatureWrapper>

          <Separator val={0.5} />

          <BottomBar>
            <QuantitySelector>
              <SubTextBlack size={18} color={Colors.white} fontWeight={400}>
                1 +
              </SubTextBlack>
            </QuantitySelector>

            <BuyNowButton>
              <SubTextBlack
                size={22}
                color={Colors.white}
                fontFamily={Fonts.ThemeBold}>
                {localize('PM30')}
              </SubTextBlack>
            </BuyNowButton>
          </BottomBar>

          {/* Specifications */}
          <SubTextBlack
            size={20}
            color={Colors.black1A}
            fontFamily={Fonts.ThemeRegular}
            fontWeight={400}>
            {localize('PM31')}
          </SubTextBlack>
          {/* {specifications.map((item, index) => (
            <SpecRow key={index}>
              <SpecContainer>
                <SubTextBlack
                  size={12}
                  color={Colors.gray1A}
                  fontFamily={Fonts.ThemeRegular}
                  fontWeight={300}>
                  {item.label}
                </SubTextBlack>
              </SpecContainer>
              <SpecContainer>
                <SubTextBlack
                  size={12}
                  color={Colors.black}
                  fontFamily={Fonts.ThemeRegular}
                  fontWeight={300}>
                  {item.value}
                </SubTextBlack>
              </SpecContainer>
            </SpecRow>
          ))} */}

          {(showAllSpecs ? specifications : specifications.slice(0, 3)).map(
            (item, index) => (
              <SpecRow key={index}>
                <SpecContainer>
                  <SubTextBlack
                    size={12}
                    color={Colors.gray1A}
                    fontFamily={Fonts.ThemeRegular}
                    fontWeight={300}>
                    {item.label}
                  </SubTextBlack>
                </SpecContainer>
                <SpecContainer>
                  <SubTextBlack
                    size={12}
                    color={Colors.black}
                    fontFamily={Fonts.ThemeRegular}
                    fontWeight={300}>
                    {item.value}
                  </SubTextBlack>
                </SpecContainer>
              </SpecRow>
            ),
          )}

          {/* <ViewMoreTouchableOpacity>
            <SubTextBlack
              size={12}
              color={Colors.redED}
              fontFamily={Fonts.ThemeRegular}
              fontWeight={300}>
              {localize('PM32')}
            </SubTextBlack>
            <DownArrowImage
              source={Images.downArrowIcon}
              resizeMode="contain"
            />
          </ViewMoreTouchableOpacity> */}

          <ViewMoreTouchableOpacity
            onPress={() => setShowAllSpecs(!showAllSpecs)}>
            <SubTextBlack
              size={12}
              color={Colors.redED}
              fontFamily={Fonts.ThemeRegular}
              fontWeight={300}>
              {showAllSpecs ? localize('PM64') : localize('PM32')}
            </SubTextBlack>
            <DownArrowImage
              source={
                showAllSpecs ? Images.downArrowIcon : Images.downArrowIcon
              }
              resizeMode="contain"
            />
          </ViewMoreTouchableOpacity>

          <Separator val={1} />

          <SubTextBlack
            size={16}
            color={Colors.black}
            fontFamily={Fonts.ThemeRegular}
            fontWeight={400}>
            {localize('PM33')}
          </SubTextBlack>

          <Separator val={0.5} />
          <ImageContainer>
            <OfferImage source={Images.demo20Image} />
          </ImageContainer>

          <Separator val={1} />

          {/* Product Reviews */}
          <SubTextBlack
            size={20}
            color={Colors.black}
            fontFamily={Fonts.ThemeRegular}
            fontWeight={400}>
            {localize('PM34')}
          </SubTextBlack>

          <Separator val={0.5} />

          <ReviewContainer>
            <LeftView>
              <Avatar source={review.avatar} />
            </LeftView>
            <RightView>
              <Info>
                <LeftView>
                  <SubTextBlack
                    size={14}
                    color={Colors.black}
                    fontFamily={Fonts.ThemeRegular}
                    fontWeight={600}>
                    {review.name}
                  </SubTextBlack>

                  <Separator val={0.1} />

                  <StarRating rating={product.rating} />
                </LeftView>
                <RightView style={{alignItems: 'flex-end'}}>
                  <SubTextBlack
                    size={12}
                    color={Colors.grayBC}
                    fontFamily={Fonts.ThemeRegular}
                    fontWeight={400}>
                    {review.timeAgo}
                  </SubTextBlack>
                </RightView>
              </Info>

              <ImagesList
                data={review.images}
                horizontal
                keyExtractor={item => item.id}
                renderItem={({item}) => (
                  <ReviewImage source={item.src} resizeMode="contain" />
                )}
                showsHorizontalScrollIndicator={false}
              />

              <SubTextBlack
                size={12}
                color={Colors.black}
                fontFamily={Fonts.ThemeRegular}
                fontWeight={400}
                numberOfLines={expanded ? undefined : 3}>
                {review.text}
              </SubTextBlack>

              {!expanded && (
                <MoreButton onPress={() => setExpanded(true)}>
                  <SubTextBlack
                    size={12}
                    color={Colors.blue00}
                    fontFamily={Fonts.ThemeRegular}
                    fontWeight={400}>
                    {localize('PM35')}
                  </SubTextBlack>
                </MoreButton>
              )}
            </RightView>
          </ReviewContainer>
        </Container>
      </MainContainer>
    </SafeAreaContView>
  );
}
