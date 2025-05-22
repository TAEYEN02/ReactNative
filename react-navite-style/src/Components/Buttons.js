import styled from 'styled-components';
import { Pressable } from 'react-native';

const ButtonContainer = styled.Pressable`
        background-color:'#FFB6C1';
        border-radius: 8px;
        padding: 15px 24px;
        margin: 10px;
        alignItems : center;
`

const ButtonText = styled.Text`
    color : '#fff;
    fontSize: 18px;
    font-weight:bold;
`

const MyButton = () => {
  return (
    <ButtonContainer>
      <ButtonText>버튼이름</ButtonText>
    </ButtonContainer>
  );
};

export default MyButton;