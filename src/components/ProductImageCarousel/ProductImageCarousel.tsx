import {useRef, useState} from 'react';
import {Dimensions, ImageSourcePropType} from 'react-native';
import {
  ArrowButtonLeft,
  ArrowButtonRight,
  Dot,
  DotContainer,
  IconButton,
  IconImage,
  ImageWrapper,
  StyledImage,
  TopRightIcons,
  Wrapper,
} from './ProductImageCarouselStyle';
import Carousel from 'react-native-reanimated-carousel';
import {Colors, Images} from '../../utils/theme';

const {width: SCREEN_WIDTH} = Dimensions.get('window');

type Props = {
  images: ImageSourcePropType[];
};

export default function ProductImageCarousel({images}: Props) {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [wishlistActive, setWishlistActive] = useState(false);
  const carouselRef = useRef<any>(null);

  return (
    <Wrapper>
      {/* Left arrow */}
      <ArrowButtonLeft
        onPress={() => {
          if (currentIndex > 0) {
            carouselRef.current?.scrollTo({
              index: currentIndex - 1,
              animated: true,
            });
          }
        }}>
        <IconImage source={Images.leftArrowIcon} />{' '}
      </ArrowButtonLeft>

      {/* Carousel */}
      <Carousel
        ref={carouselRef}
        width={SCREEN_WIDTH}
        height={350}
        data={images}
        loop={false}
        onSnapToItem={index => setCurrentIndex(index)}
        scrollAnimationDuration={500}
        renderItem={({item}) => (
          <ImageWrapper>
            <StyledImage source={item} resizeMode="contain" />
          </ImageWrapper>
        )}
      />

      {/* Wishlist + Share buttons */}
      <TopRightIcons>
        <IconButton onPress={() => setWishlistActive(prev => !prev)}>
          <IconImage
            source={
              wishlistActive ? Images.heartFilledIcon : Images.wishlistIcon
            }
            style={!wishlistActive ? {tintColor: Colors.grayC7} : undefined}
          />
        </IconButton>
        <IconButton onPress={() => console.log('Share')}>
          <IconImage
            source={Images.shareIcon}
            style={{tintColor: Colors.grayC7}}
          />
        </IconButton>
      </TopRightIcons>

      {/* Right arrow */}
      <ArrowButtonRight
        onPress={() => {
          if (currentIndex < images.length - 1) {
            carouselRef.current?.scrollTo({
              index: currentIndex + 1,
              animated: true,
            });
          }
        }}>
        <IconImage source={Images.rightArrow1Icon} />{' '}
      </ArrowButtonRight>

      <DotContainer>
        {images.map((_, index) => (
          <Dot key={index} active={index === currentIndex} />
        ))}
      </DotContainer>
    </Wrapper>
  );
}
