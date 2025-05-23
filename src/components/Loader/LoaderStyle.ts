import styled from 'styled-components/native';

import {Colors, Responsive} from '../../utils/theme';

export const LoaderView = styled.View`
    align-items: center;
    justify-content: center;
    align-self: center;
    padding: ${Responsive.widthPercentageToDP('10')}px;
    background-color: ${Colors.white};
    border-radius: ${Responsive.widthPercentageToDP('5')}px;
    z-index: 1000;
    position: absolute;
    top: ${Responsive.heightPercentageToDP('50') - Responsive.widthPercentageToDP('25')}px;
`;

export const Indicator = styled.ActivityIndicator``;
