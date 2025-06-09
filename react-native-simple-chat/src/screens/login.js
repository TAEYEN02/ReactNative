import styled from "styled-components";
import { Image, Input, Button } from "../components/index";
import { images } from "../utils/images";
import { useState, useRef, useEffect, useContext } from "react";
import { KeyboardAwareScrollView } from "react-native-keyboard-aware-scroll-view";
import { removeWhitespce, validateEmail, validatePassword } from "../utils/common";
import { Alert } from 'react-native';
import { login } from '../utils/firebase';
import { ProgressContext, UserContext } from "../contexts";

const Container = styled.View`
    flex:1;
    justify-content : center;
    align-items : center;
    background-color : ${({ theme }) => theme.background};
`
const ErrorText = styled.Text`
    align-items : flex-start;
    width :90%;
    height : 20px;
    margin-bottom : 10px;
    line-height: 20px;
    color:${({ theme }) => theme.errorMessage};
`


const Login = ({ navigation }) => {
    //이메일 상태 관리
    const [email, setEmail] = useState('');
    //비밀번호 상태 관리
    const [password, setPassword] = useState('');
    //에러메시지 상태 관리
    const [errorMessage, setErrorMessage] = useState('');
    //버튼의 활성화 상태를 관리하는 state
    const [disabled, setIsDisabled] = useState(false);
    const passwordRef = useRef();
    const {spinner} = useContext(ProgressContext);
    const {dispatch} = useContext(UserContext);

    //email, password, errorMessage의 state 값이 변할때마다
    //조건에 맞게 disabled의 state에 값을 세팅한다
    useEffect(() => {
        //로그인 버튼은 이메일과 비밀번호가 입력되어있어야 하고
        //오류 메시지가 없어야 활성화된다
        setIsDisabled(!(email && password && !errorMessage));
    }, [email, password, errorMessage]);

    const _handleEmailChange = (email) => {
        //입력된 이메일에 공백이 있다면 먼저 지운다
        const changedEmail = removeWhitespce(email);
        setEmail(changedEmail);
        setErrorMessage(
            validateEmail(changedEmail) ? '' : 'Please verifay your Email'
        )
    }

    const _handlePasswordChange = (password) => {
        const changedPassword = removeWhitespce(password);
        setPassword(changedPassword);
    }

    const _handleLoginButtonPress = async () => {
        try {
            spinner.start();
            const user = await login({ email, password });
            Alert.alert('Login Success', user.email);
            dispatch(user.email,user.uid);
        } catch (error) {
            Alert.alert('Login Error', error.message);
        }finally{
            spinner.stop();
        }
    };


    return (
        <KeyboardAwareScrollView
            contentContainerStyle={{ flex: 1 }}
            extraHeight={10}
            enableOnAndroid={true}
        >
            <Container>
                <Image url={images.logo} rounded="true" />
                <Input
                    label="email"
                    value={email}
                    onChangeText={_handleEmailChange}
                    onSubmitEditing={() => passwordRef.current.focus()}
                    placeholder="Email"
                    returnKeyType="next"
                />
                <Input
                    ref={passwordRef}
                    label="password"
                    value={password}
                    onChangeText={_handlePasswordChange}
                    onSubmitEditing={() => { }}
                    placeholder="Password"
                    returnKeyType="done"
                    isPassword={true}
                />
                <ErrorText>{errorMessage}</ErrorText>
                <Button
                    title="signup"
                    onPress={_handleLoginButtonPress}
                    disabled={disabled}
                />
                <Button
                    title="Sign up with email"
                    onPress={() => navigation.navigate("Signup")}
                    isFilled={false}
                />
            </Container>
        </KeyboardAwareScrollView>
    )
}

export default Login;
