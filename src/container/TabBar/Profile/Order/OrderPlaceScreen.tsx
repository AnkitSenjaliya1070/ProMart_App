import {ParamListBase, useNavigation} from '@react-navigation/native';
import {NativeStackNavigationProp} from '@react-navigation/native-stack';
import CommonStyles, {
  MainContainer,
  SafeAreaContView,
  SafeAreaViewTop,
  Separator,
  SubTextBlack,
} from '../../../../utils/theme/commonStyle';
import {Colors, Fonts, Images} from '../../../../utils/theme';
import {
  BackIconImage,
  Button,
  Container,
  HeaderBackTouchableOpacity,
  HeaderContainer,
  SuccessImage,
} from './OrderPlaceScreenStyle';
import {localize} from '../../../../functions/commonFunctions';

export default function OrderPlaceScreen() {
  const navigation = useNavigation<NativeStackNavigationProp<ParamListBase>>();

  const handleBackPress = () => {
    navigation.goBack();
  };

  return (
    <SafeAreaContView>
      <MainContainer>
        <SafeAreaViewTop />
        <HeaderContainer>
          <HeaderBackTouchableOpacity onPress={handleBackPress}>
            <BackIconImage source={Images.backIcon} resizeMode="cover" />
          </HeaderBackTouchableOpacity>
        </HeaderContainer>

        <Container>
          <SuccessImage source={Images.orderPlaceIcon} resizeMode="contain" />

          <Separator val={1}/>

          <SubTextBlack
            size={24}
            color={Colors.black}
            fontFamily={Fonts.ThemeRegular}
            fontWeight={700} style={CommonStyles.centerText}>
            {localize('PM54')}
          </SubTextBlack>

          <Separator val={1}/>

          <SubTextBlack
            size={15}
            color={Colors.black}
            fontFamily={Fonts.ThemeRegular}
            fontWeight={400} style={CommonStyles.centerText}>
            {localize('PM55')}
          </SubTextBlack>
        </Container>

        <Button>
          <SubTextBlack
            size={20}
            color={Colors.white}
            fontFamily={Fonts.ThemeRegular}
            fontWeight={600}>
            {localize('PM56')}
          </SubTextBlack>
        </Button>
      </MainContainer>
    </SafeAreaContView>
  );
}
