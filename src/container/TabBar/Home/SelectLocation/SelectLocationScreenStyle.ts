import styled from 'styled-components/native';
import {Platform, StyleSheet} from 'react-native';
import MapView from 'react-native-maps';
import {Colors, Responsive} from '../../../../utils/theme';

export const Container = styled.View`
  flex: 1;
  background-color: #fff;
`;

export const MapStyled = styled(MapView)`
  width: 100%;
  height: 100%;
`;

export const SearchBarContainer = styled.View`
  position: absolute;
  top: ${Platform.OS === 'android' ? 20 : 60}px;
  left: 20px;
  right: 20px;
  z-index: 1;
  background-color: #fff;
  border-radius: 30px;
  padding: 0 20px;
  height: 50px;
  flex-direction: row;
  align-items: center;
  box-shadow: 0px 4px 6px rgba(0, 0, 0, 0.1);
  elevation: 5;
`;

export const SearchInput = styled.TextInput`
  flex: 1;
  font-size: 16px;
  color: #000;
`;

export const BottomSheet = styled.View`
  position: absolute;
  bottom: 0;
  left: 0;
  right: 0;
  background-color: #fff;
  padding: 20px;
  border-top-left-radius: 20px;
  border-top-right-radius: 20px;
  shadow-color: #000;
  shadow-opacity: 0.1;
  shadow-radius: 10px;
  elevation: 15;
`;

export const ConfirmButton = styled.TouchableOpacity`
  background-color: red;
  padding: 14px;
  border-radius: 10px;
  align-items: center;
  margin-top: 10px;
`;

export const styles = StyleSheet.create({
  leftIconStyle: {
    tintColor: Colors.grayC7,
  },
  searchInput: {
    height: Responsive.heightPercentageToDP(5),
    alignItems: 'center',
    position: 'absolute',
    borderRadius: Responsive.widthPercentageToDP(10),
    borderColor: Colors.grayC7,
    top: Platform.OS === 'android' ? 20 : 60,
    left: 10,
    right: 10,
    zIndex: 1,
  },
});
