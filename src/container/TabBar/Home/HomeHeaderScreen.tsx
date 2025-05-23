import React from 'react';
import {
  DownArrowImage,
  HeaderContainer,
  LocationBox,
  LocationIcon,
  LocationSubText,
  LocationText,
  Logo,
  LogoWrapper,
  styles,
  TopRow,
} from './HomeHeaderScreenStyle';
import {Images} from '../../../utils/theme';
import TextInputView from '../../../components/TextInputView/TextInputView';
import CommonStyles from '../../../utils/theme/commonStyle';
import {localize} from '../../../functions/commonFunctions';

export default function HomeHeaderScreen() {
  return (
      <HeaderContainer>
        <TopRow>
          <LogoWrapper>
            <Logo source={Images.proMartLogo} />
          </LogoWrapper>

          <LogoWrapper>
            <Logo source={Images.nearByImage} />
          </LogoWrapper>
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

        <LocationBox>
          <LocationIcon source={Images.locationIcon} />
          <LocationText>Mumbai -</LocationText>
          <LocationSubText>1226 university</LocationSubText>
          <DownArrowImage source={Images.downArrowIcon} />
        </LocationBox>
      </HeaderContainer>
  );
}
