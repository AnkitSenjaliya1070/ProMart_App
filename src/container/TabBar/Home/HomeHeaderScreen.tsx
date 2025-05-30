import React from 'react';
import {
  DownArrowImage,
  HeaderContainer,
  LocationBox,
  LocationIcon,
  Logo,
  LogoWrapper,
  LogoWrapperNearMe,
  styles,
  TopRow,
} from './HomeHeaderScreenStyle';
import {Colors, Fonts, Images} from '../../../utils/theme';
import TextInputView from '../../../components/TextInputView/TextInputView';
import CommonStyles, {
  Separator,
  SubTextBlack,
} from '../../../utils/theme/commonStyle';
import {localize} from '../../../functions/commonFunctions';

export default function HomeHeaderScreen() {
  return (
    <HeaderContainer>
      <TopRow>
        <LogoWrapper>
          <Logo source={Images.proMartLogo} />
        </LogoWrapper>

        <LogoWrapperNearMe>
          <Logo source={Images.nearByImage} />
        </LogoWrapperNearMe>
      </TopRow>

      <TextInputView
        label={''}
        placeholder={localize('PM2')}
        value={''}
        returnKeyType={'done'}
        leftIcon={Images.searchIcon}
        leftIconStyle={styles.leftIconStyle}
        // iconStyle={styles.iconStyle}
        placeholderStyle={CommonStyles.placeholderStyle}
        style={styles.searchInput}
      />

      <Separator val={-0.5} />

      <LocationBox>
        <LocationIcon source={Images.locationIcon} />
        <SubTextBlack
          size={14}
          color={Colors.black}
          fontWeight={500}
          style={styles.textMargin}>
          Mumbai -
        </SubTextBlack>
        <SubTextBlack
          size={12}
          color={Colors.black}
          fontFamily={Fonts.ThemeRegular}
          fontWeight={400}
          style={styles.textMargin}>
          1226 university
        </SubTextBlack>
        <DownArrowImage source={Images.downArrowIcon} resizeMode="contain" />
      </LocationBox>
      <Separator val={0.5} />
    </HeaderContainer>
  );
}
