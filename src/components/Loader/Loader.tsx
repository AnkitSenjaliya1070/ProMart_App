import React, {useEffect, useState} from 'react';
import styled from 'styled-components/native';
import {Responsive} from '../../utils/theme';

export default function Loader(props: any) {
    const [loader, setLoader] = useState(false);

    useEffect(() => {
        const {isLoading} = props;
        setLoader(isLoading);
    }, [props]);

    return loader === true ? (
        <LoaderView>
            <Indicator size="large" color={'red'} />
        </LoaderView>
    ) : null;
}

export const LoaderView = styled.View`
    align-items: center;
    justify-content: center;
    align-self: center;
    padding: ${Responsive.widthPercentageToDP('10')}px;
    background-color: 'red';
    border-radius: ${Responsive.widthPercentageToDP('5')}px;
    z-index: 1000;
    position: absolute;
    top: ${Responsive.heightPercentageToDP('50') - Responsive.widthPercentageToDP('25')}px;
`;

export const Indicator = styled.ActivityIndicator`
    z-index: 2;
`;
