import styled from 'styled-components/native';

import {Responsive} from '../../utils/theme';

export const SplashContainerView = styled.View`
    flex: 1;
    justify-content: center;
    align-items: center;
`;

export const AppLogoImage = styled.Image`
    width: ${Responsive.widthPercentageToDP('100%')}px;
    height: ${Responsive.heightPercentageToDP('100%')}px;
    /* margin-bottom: 30px; */
`;
