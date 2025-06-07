import {useState} from 'react';
import {
  AvailabilityRow,
  ButtonsRow,
  CalendarIcon,
  CallButton,
  DateBox,
  DateRow,
  DeliveredButton,
  DeliveryInfo,
  Footer,
  HeaderContainer,
  HeaderTopContainer,
  IconButton,
  InfoWrapper,
  LeftSection,
  LocationIcon,
  MapContainer,
  ProfileImage,
  RightIcon,
  RightSection,
  styles,
} from './DeliveryTrackingScreenStyle';
import {Switch, View} from 'react-native';
import MapView, {Marker} from 'react-native-maps';
import CommonStyles, {
  MainContainer,
  SafeAreaViewTop,
  Separator,
  SeparatorH,
  SubTextBlack,
} from '../../../../utils/theme/commonStyle';
import {Colors, Fonts, Images, Screens} from '../../../../utils/theme';
import {ParamListBase, useNavigation} from '@react-navigation/native';
import {NativeStackNavigationProp} from '@react-navigation/native-stack';
import {localize} from '../../../../functions/commonFunctions';

export default function DeliveryTrackingScreen() {
  const navigation = useNavigation<NativeStackNavigationProp<ParamListBase>>();

  const [isAvailable, setIsAvailable] = useState(true);

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
            <SeparatorH val={1}/>
            <IconButton
              // onPress={() => navigation.navigate(Screens.QRScannerScreen)}
              >
              <RightIcon source={Images.scannerIcon} />
            </IconButton>
          </RightSection>
        </HeaderTopContainer>

        <Separator val={1} />

        <DateRow>
          <DateBox>
            <CalendarIcon source={Images.calendarIcon} />

            <SeparatorH val={0.8} />
            <SubTextBlack
              size={12}
              color={Colors.white}
              fontFamily={Fonts.ThemeRegular}
              fontWeight={500}>
              14th August, 2024
            </SubTextBlack>
          </DateBox>
          <AvailabilityRow>
            <SubTextBlack
              size={12}
              color={Colors.black}
              fontFamily={Fonts.ThemeRegular}
              fontWeight={500}>
              Are you available?
            </SubTextBlack>
            <SeparatorH val={1} />
            {/* <Switch
              value={isAvailable}
              onValueChange={() => setIsAvailable(prev => !prev)}
            /> */}
            <View style={styles.switchWrapper}>
              <View
                style={[
                  styles.switchBorder,
                  isAvailable && styles.switchBorderActive,
                ]}>
                <Switch
                  value={isAvailable}
                  onValueChange={() => setIsAvailable(prev => !prev)}
                  trackColor={{false: Colors.redDB, true: Colors.white}}
                  thumbColor={isAvailable ? Colors.green4A : Colors.white}
                />
              </View>
            </View>
          </AvailabilityRow>
        </DateRow>
        <Separator val={1} />
      </HeaderContainer>

      <MapContainer>
        <MapView
          style={CommonStyles.flex}
          initialRegion={{
            latitude: 33.5207,
            longitude: -86.8025,
            latitudeDelta: 0.02,
            longitudeDelta: 0.02,
          }}>
          <Marker coordinate={{latitude: 33.5207, longitude: -86.8025}} />
        </MapView>
      </MapContainer>

      <Footer>
        <LeftSection>
          <SeparatorH val={2} />
          <ProfileImage source={Images.demo3Image} />
          <SeparatorH val={1.5} />
          <DeliveryInfo>
            <SubTextBlack
              size={11}
              color={Colors.black}
              fontFamily={Fonts.ThemeRegular}
              fontWeight={500}>
              Nayanika Mishra
            </SubTextBlack>
            <SubTextBlack
              size={10}
              color={Colors.gray89}
              fontFamily={Fonts.ThemeRegular}
              fontWeight={400}>
              On the way to deliver the order.
            </SubTextBlack>
          </DeliveryInfo>
        </LeftSection>
        <Separator val={1} />
        <ButtonsRow>
          <CallButton>
            <SubTextBlack
              size={10}
              color={Colors.white}
              fontFamily={Fonts.ThemeRegular}
              fontWeight={600}
              style={CommonStyles.centerText}>
              {localize('PM69')}
            </SubTextBlack>
          </CallButton>
          <DeliveredButton>
            <SubTextBlack
              size={10}
              color={Colors.white}
              fontFamily={Fonts.ThemeRegular}
              fontWeight={600}
              style={CommonStyles.centerText}>
              {localize('PM70')}
            </SubTextBlack>
          </DeliveredButton>
        </ButtonsRow>
      </Footer>
    </MainContainer>
  );
}
