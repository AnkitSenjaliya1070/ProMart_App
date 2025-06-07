import {useEffect, useState} from 'react';
import {Alert, PermissionsAndroid, Platform} from 'react-native';
import Geolocation from 'react-native-geolocation-service';
import {Marker} from 'react-native-maps';
import Geocoder from 'react-native-geocoding';

import {
  ConfirmButton,
  Container,
  MapStyled,
  BottomSheet,
  styles,
  SearchBarContainer,
  SearchInput,
} from './SelectLocationScreenStyle';
import CommonStyles, {
  Separator,
  SubTextBlack,
} from '../../../../utils/theme/commonStyle';
import {Colors, Fonts, Images} from '../../../../utils/theme';
import {localize} from '../../../../functions/commonFunctions';
import TextInputView from '../../../../components/TextInputView/TextInputView';

Geocoder.init('AIzaSyAWZ7OFx6h6u7p6cuM4rWUfoPAh3CkqYag');

export default function SelectLocationScreen() {
  const [searchText, setSearchText] = useState('');

  const [region, setRegion] = useState({
    latitude: 22.3039,
    longitude: 70.8022,
    latitudeDelta: 0.05,
    longitudeDelta: 0.05,
  });

  const [address, setAddress] = useState('');

  useEffect(() => {
    console.log('callllllled....UseEffect');

    (async () => {
      await requestLocationPermission();
    })();
  }, []);

  const requestLocationPermission = async () => {
    if (Platform.OS === 'android') {
      try {
        const granted = await PermissionsAndroid.request(
          PermissionsAndroid.PERMISSIONS.ACCESS_FINE_LOCATION,
          {
            title: 'Location Permission',
            message: 'App needs access to your location',
            buttonNeutral: 'Ask Me Later',
            buttonNegative: 'Cancel',
            buttonPositive: 'OK',
          },
        );
        if (granted === PermissionsAndroid.RESULTS.GRANTED) {
          console.log('Permission granted result:', granted);
          // getCurrentLocation();
          console.log('granted.......');
        } else {
          Alert.alert('Permission Denied', 'Location permission is required.');
        }
      } catch (err) {
        console.warn(err);
      }
    } else {
      // getCurrentLocation();
    }
  };

  const getCurrentLocation = () => {
    Geolocation.getCurrentPosition(
      position => {
        console.log('GETTING POSITION...'); // <- Add this
        console.log('Fetched position:', position);
      },
      error => {
        console.log('Location error:', error);
      },
      {
        enableHighAccuracy: true,
        timeout: 15000,
        maximumAge: 10000,
      },
    );



    // Geolocation.getCurrentPosition(
    //   position => {
    //     const {latitude, longitude} = position.coords;
    //     console.log('Fetched location from simulator:', latitude, longitude);
    //     const newRegion = {
    //       latitude,
    //       longitude,
    //       latitudeDelta: 0.015,
    //       longitudeDelta: 0.0121,
    //     };
    //     setRegion(newRegion);
    //     console.log('newRegion---------->', newRegion);
    //     fetchAddressFromCoords(latitude, longitude);
    //   },
    //   error => {
    //     console.log('Location error:', error);
    //     Alert.alert('Location Error', error.message);
    //   },
    //   {
    //     enableHighAccuracy: true,
    //     timeout: 15000,
    //     maximumAge: 10000,
    //   },
    // );
  };

  const fetchAddressFromCoords = (lat: any, lng: any) => {
    Geocoder.from(lat, lng)
      .then(json => {
        const addressComponent = json.results[0]?.formatted_address;
        setAddress(addressComponent || 'Address not found');
      })
      .catch(error => {
        setAddress('Unable to fetch address');
      });
  };

  const onRegionChangeComplete = (region: any) => {
    setRegion(region);
    setAddress('Fetching address...');
    setTimeout(() => {
      fetchAddressFromCoords(region.latitude, region.longitude);
    }, 300);
  };

  return (
    <Container>
      <SearchBarContainer>
        <SearchInput
          placeholder="Search Location Here"
          placeholderTextColor="#000"
        />
      </SearchBarContainer>

      {/* <TextInputView
        label={''}
        placeholder={localize('PM68')}
        value={searchText}
        onChangeText={text => setSearchText(text)}
        returnKeyType={'done'}
        leftIcon={Images.searchIcon}
        leftIconStyle={styles.leftIconStyle}
        placeholderStyle={CommonStyles.placeholderStyle}
        style={styles.searchInput}
      /> */}

      <MapStyled
        region={region}
        onRegionChangeComplete={onRegionChangeComplete}>
        <Marker coordinate={region} />
      </MapStyled>

      <BottomSheet>
        <SubTextBlack
          size={22}
          color={Colors.black1E}
          fontFamily={Fonts.ThemeRegular}
          fontWeight={700}>
          {localize('PM65')}
        </SubTextBlack>

        <Separator val={0.5} />
        <SubTextBlack
          size={12}
          color={Colors.gray9D}
          fontFamily={Fonts.ThemeRegular}
          fontWeight={400}>
          {localize('PM66')}
        </SubTextBlack>
        <Separator val={0.5} />

        <SubTextBlack
          size={12}
          color={Colors.gray34}
          fontFamily={Fonts.ThemeRegular}
          fontWeight={400}>
          {address || 'Fetching address...'}
        </SubTextBlack>
        <Separator val={0.5} />
        <ConfirmButton onPress={() => Alert.alert('Confirmed', address)}>
          <SubTextBlack
            size={20}
            color={Colors.white}
            fontFamily={Fonts.ThemeRegular}
            fontWeight={600}>
            {localize('PM67')}
          </SubTextBlack>
        </ConfirmButton>
      </BottomSheet>
    </Container>
  );
}
