import React, { useState, useMemo } from 'react';
import styled from 'styled-components/native';
import Button from './Button';

const StyledText = styled.Text`
  font-size: 24px;
`;

const list = ['JavaScript', 'Expo', 'Expo', 'React Native'];

const Length = () => {
    const [index, setIndex] = useState(0);
    const text = list[index];
    const length = useMemo(() => text.length, [text]);

    const _onClick = () => {
        setIndex(prev => (prev + 1) % list.length);
    };

    return (
        //문자열
        //해당 문자열의 길이
        //버튼(버튼을 누를때마다 배열을 순환하면서 문자열의 길이를 구하는 기능)
        <>
            <Button title="list" onPress={_onClick} />
            <StyledText>Text : {text}</StyledText>
            <StyledText>Length : {length}</StyledText>
        </>
    )
}
export default Length;