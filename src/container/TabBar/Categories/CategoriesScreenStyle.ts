import styled from 'styled-components/native';
import { Colors, Responsive } from '../../../utils/theme';
import { StyleSheet } from 'react-native';

export const Screen = styled.SafeAreaView`
  flex: 1;
`;

export const MainView = styled.View`
  flex: 1;
  flex-direction: row;
`;

export const LeftView = styled.View`
  width: ${Responsive.widthPercentageToDP(27)}px;
  background-color: ${Colors.pinkFD};
`;

export const LeftSideBar = styled.FlatList`
`;

export const LeftSidebarItem = styled.View`
  padding: ${Responsive.heightPercentageToDP(1)}px ${Responsive.widthPercentageToDP(3)}px;
  align-items: center;
  justify-content: center;
  position: relative;
  background-color: ${(props) => (props.isActive ? Colors.grayF5 : Colors.transparent)};
`;

export const LeftSidebarImage = styled.Image`
  height: ${Responsive.widthPercentageToDP (12)}px;
  width: ${Responsive.widthPercentageToDP(12)}px;
  border-radius: ${Responsive.widthPercentageToDP('10')}px;
  margin-bottom: ${Responsive.heightPercentageToDP('1')}px;
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
  /* justify-content: flex-start; */
`;

export const Item = styled.TouchableOpacity`
  width: ${Responsive.widthPercentageToDP(22)}px;
  margin-bottom: ${Responsive.heightPercentageToDP(1)}px;
  margin-top: ${Responsive.heightPercentageToDP(1)}px;
  margin-right: 2px;
  align-items: center;
`;

export const ItemImage = styled.Image`
  height: ${Responsive.widthPercentageToDP(18)}px;
  width: ${Responsive.widthPercentageToDP(18)}px;
  border-radius: ${Responsive.widthPercentageToDP(9)}px;
`;

export const styles = StyleSheet.create({
  searchInput:{
    height: Responsive.heightPercentageToDP(5),
    alignItems: 'center',
    borderRadius: Responsive.widthPercentageToDP(6),
    marginHorizontal: Responsive.widthPercentageToDP(3),
    borderColor: Colors.transparent,
  },
});