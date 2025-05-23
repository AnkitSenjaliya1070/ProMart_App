import styled from 'styled-components/native';
import { Colors, Fonts, Responsive } from '../../../utils/theme';
import { StyleSheet } from 'react-native';

export const Screen = styled.SafeAreaView`
  flex: 1;
  background-color: ${Colors.white};
`;

export const MainView = styled.View`
  flex: 1;
  flex-direction: row;
`;

export const LeftView = styled.View`
  width: ${Responsive.widthPercentageToDP(25)}px;
  background-color: ${Colors.pinkFD};
`;

export const LeftSideBar = styled.FlatList`
  
`;

export const LeftSidebarItem = styled.View`
  padding: ${Responsive.heightPercentageToDP(1)}px ${Responsive.widthPercentageToDP(3)}px;
  align-items: center;
  justify-content: center;
  position: relative;
  background-color: ${(props) => (props.isActive ? Colors.white : Colors.transparent)};
`;

export const LeftSidebarImage = styled.Image`
  height: ${Responsive.widthPercentageToDP (12)}px;
  width: ${Responsive.widthPercentageToDP(12)}px;
  border-radius: ${Responsive.widthPercentageToDP('10')}px;
  margin-bottom: ${Responsive.heightPercentageToDP('1')}px;
`;

export const LeftSidebarText = styled.Text`
  font-size: ${Responsive.convertFontScale(14)}px;
  color: ${props => (props.isActive ? Colors.redED : Colors.black23)};
  font-family: ${props => (props.isActive ? Fonts.ThemeBold : Fonts.ThemeRegular)};;
  text-align: center;
`;

export const SidebarItemSeparator = styled.View`
  height: 1px;
  background-color: ${Colors.pinkED};
  margin-horizontal: ${Responsive.widthPercentageToDP(2)}px;
`;

export const RedSelectedBar = styled.View`
  width: ${Responsive.widthPercentageToDP('1.5')}px;
  background-color: ${Colors.redED};
  position: absolute;
  left: 0;
  top: 0;
  bottom: 0;
  border-top-right-radius: 4px;
  border-bottom-right-radius: 4px;
`;


export const RightSideBar = styled.ScrollView`
  flex: 1;
  padding: ${Responsive.widthPercentageToDP(2)}px;
`;

export const Section = styled.View`
  margin-bottom: ${Responsive.heightPercentageToDP(2)}px;
`;

export const SectionHeader = styled.View`
  flex-direction: row;
  align-items: center;
  margin-bottom: ${Responsive.heightPercentageToDP(1)}px;
`;

export const SectionTitle = styled.Text`
  font-size: ${Responsive.convertFontScale(14)}px;
  font-weight: 500;
  color: ${Colors.black};
  margin-right: ${Responsive.widthPercentageToDP(2)}px;
`;

export const SectionLine = styled.View`
  flex: 1;
  height: ${Responsive.heightPercentageToDP(0.1)}px;
  background-color: ${Colors.pinkED};
  border-radius: 1px;
`;


// Grid of items
export const ItemsRow = styled.View`
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: flex-start;
`;

export const Item = styled.View`
  width: ${Responsive.widthPercentageToDP(23)}px;
  margin-bottom: ${Responsive.heightPercentageToDP(1)}px;
  margin-top: ${Responsive.heightPercentageToDP(1)}px;
  align-items: center;
`;

export const ItemImage = styled.Image`
  height: ${Responsive.widthPercentageToDP(18)}px;
  width: ${Responsive.widthPercentageToDP(18)}px;
  border-radius: ${Responsive.widthPercentageToDP(9)}px;
`;

export const ItemText = styled.Text`
  margin-top: ${Responsive.heightPercentageToDP(0.5)}px;
  font-size: ${Responsive.convertFontScale(12)}px;
  color: ${Colors.black23};
  text-align: center;
  font-family: ${Fonts.ThemeRegular};
`;


export const styles = StyleSheet.create({
  searchInput:{
    height: Responsive.heightPercentageToDP(5),
    alignItems: 'center',
    borderRadius: 24,
    marginHorizontal: 18
  }
})