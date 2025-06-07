import styled from "styled-components/native";
import { Colors, Responsive } from "../../utils/theme";

export const Wrapper = styled.View`
  width: 100%;
  height: ${Responsive.widthPercentageToDP('110%')}px;
  justify-content: center;
  align-items: center;
  position: relative;
`;

export const ImageWrapper = styled.View`
  width: 100%;
  height: 100%;
`;

export const StyledImage = styled.Image`
  width: 100%;
  height: 100%;
`;

export const DotContainer = styled.View`
  flex-direction: row;
  position: absolute;
  bottom: ${Responsive.widthPercentageToDP(2)}px;
  align-self: center;
`;

export const Dot = styled.View<{ active: boolean }>`
  width: ${Responsive.widthPercentageToDP(2)}px;
  height: ${Responsive.widthPercentageToDP(2)}px;
  border-radius: ${Responsive.widthPercentageToDP(5)}px;
  background-color: ${({ active }) => (active ? Colors.redED : Colors.grayD9)};
  margin: ${Responsive.widthPercentageToDP(0)}px ${Responsive.widthPercentageToDP(1)}px;
`;

export const TopRightIcons = styled.View`
  position: absolute;
  right: ${Responsive.widthPercentageToDP(4)}px;
  top: ${Responsive.widthPercentageToDP(11)}px;
  z-index: 10;
  gap: ${Responsive.widthPercentageToDP(4)}px;
`;

export const IconButton = styled.TouchableOpacity`
  background-color: ${Colors.white};
  border-radius: ${Responsive.widthPercentageToDP(4)}px;
  padding: ${Responsive.widthPercentageToDP(2)}px;
  elevation: 5;
  shadow-color: #000;
  shadow-opacity: 0.1;
  shadow-radius: 5px;
`;

export const IconImage = styled.Image`
  width: ${Responsive.widthPercentageToDP(6)}px;
  height: ${Responsive.widthPercentageToDP(6)}px;
  resize-mode: contain;
`;

export const ArrowButtonLeft = styled.TouchableOpacity`
  position: absolute;
  left: ${Responsive.widthPercentageToDP(4)}px;
  top: 50%;
  transform: translateY(-14px);
  /* background-color: ${Colors.white}; */
  padding: 6px;
  /* border-radius: ${Responsive.widthPercentageToDP(5)}px; */
  z-index: 10;
`;

export const ArrowButtonRight = styled(ArrowButtonLeft)`
  left: auto;
  right: ${Responsive.widthPercentageToDP(4)}px;
`;
