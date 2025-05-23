import styled from 'styled-components/native';

import {Colors, Fonts, Responsive} from '../../utils/theme';

interface TabIconProps {
    color?: string;
    focused: boolean;
    source: any;
}

interface TabTextProps {
    color?: string;
    focused?: boolean;
    children?: React.ReactNode;
}

export const TabIcon: React.FC<TabIconProps> = styled.Image<TabIconProps>`
    width: ${Responsive.widthPercentageToDP('6.2')}px;
    height: ${Responsive.widthPercentageToDP('6.2')}px;
    tint-color: ${(props) => (props.color ? props.color : Colors.themeColor)};
    resize-mode: contain;
`;

export const TabText: React.FC<TabTextProps> = styled.Text<TabTextProps>`
    color: ${(props) => (props.color ? props.color : Colors.themeColor)};
    font-family: ${Fonts.ThemeRegular};
    font-size: ${Responsive.convertFontScale('10')}px;
    /* margin-top: 5px; */
    width: ${Responsive.widthPercentageToDP('20')}px;
    text-align: center;
`;
