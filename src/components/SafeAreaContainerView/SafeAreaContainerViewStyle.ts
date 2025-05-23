import {StyleSheet} from 'react-native';
import styled from 'styled-components/native';

import {Colors} from '../../utils/theme';

export const ViewContainer = styled.View`
    flex: 1;
    background-color: ${Colors.background};
`;
export const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: Colors.white,
    },
});
