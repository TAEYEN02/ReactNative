import { View } from 'react-native';
import styled from 'styled-components';
import Counter from './Components/Counter';
import Parent from './Components/Parent';
import Form from './Components/Form';
import { useState } from 'react';
import Button from './Components/Button';
import ScrollEnd from './Components/ScrollEnd';
import Length from './Components/Length';
import AverageCalculator from './Components/Average';
import Dog from './Components/Dog';
import Signup from './Components/Sinup';
import { ChangeTheme } from './Components/ChangeTheme';
import { LoginForm } from './Components/LoginForm';
const Container = styled.View`
    flex:1;
    background-color:#fff;
    justify-content:center;
    align-items:center;
 `
const App = () => {
    const [isVisible, setIsVisible] = useState(true);
    return (
        <Container>
            {/* <Counter/> */}
            {/* <Parent/> */}
            {/* 버튼을 하나 만들고 title은 Hide, Form이 안보일때는 Show
            버튼을 눌렀을때 Form을 숨기거나, 보이게 만들기 */}
            {/* <Button
                title={isVisible ? 'Hide' : 'Show'}
                onPress={() => setIsVisible(prev => !prev)}
            />
            {isVisible && <Form />}
            <ScrollEnd/> */}
            {/* <Length/> */}
            {/* <AverageCalculator/> */}
            {/* <Dog/> */}
            {/* <Signup/> */}
            {/* <ChangeTheme/> */}
            <LoginForm/>
        </Container>
    )
}
export default App;