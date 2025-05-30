import styled from "styled-components/native";
import { Responsive } from "../../utils/theme";

export const StarImage = styled.Image`
  width: ${Responsive.widthPercentageToDP(3.5)}px;
  height: ${Responsive.widthPercentageToDP(3.5)}px;
  margin-right: ${Responsive.widthPercentageToDP(0.5)}px;
  resize-mode: contain;
`;

export const StarRow = styled.View`
  flex-direction: row;
  align-items: center;
`;
