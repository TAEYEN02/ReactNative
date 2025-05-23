import styled from 'styled-components/native';
import { Pressable, Text } from 'react-native';

/* Pressable을 스타일링할 땐 styled(Pressable) 또는 styled.Pressable 둘 다 가능 */
//백틱(``)안에서 props에 접근할 수 있다는 장점을 이용해 props의 값에 따라 
//스타일을 변경할 수도 있다.
const ButtonContainer = styled(Pressable)`
  background-color:${props=> props.title ==="Hanbit" ? props.theme.plum : props.theme.deepSkyBlue};
  border-radius: 8px;
  padding: 15px 24px;
  margin: 10px;
  align-items: center;   
`;

/* Text 컴포넌트를 스타일링 */
const ButtonText = styled(Text)`
  color: #fff;
  font-size: 18px;
  font-weight: bold;
`;

const MyButton = (props) => {
  return (
    <ButtonContainer title={props.title}>
      <ButtonText>{props.title}</ButtonText>
    </ButtonContainer>
  );
};

export default MyButton;