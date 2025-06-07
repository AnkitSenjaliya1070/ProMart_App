import styled from 'styled-components/native';

export const Container = styled.View`
  flex: 1;
  background-color: black;
  justify-content: center;
  align-items: center;
`;

export const InfoText = styled.Text`
  position: absolute;
  bottom: 30px;
  color: white;
  background-color: rgba(0, 0, 0, 0.6);
  padding: 10px 20px;
  border-radius: 8px;
`;

export const MessageText = styled.Text`
  font-size: 16px;
  color: gray;
  text-align: center;
`;
