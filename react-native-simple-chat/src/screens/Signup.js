import styled from "styled-components"
import { Image, Input, Button } from '../components';
import { KeyboardAwareScrollView } from "react-native-keyboard-aware-scroll-view";
import { validateEmail, removeWhitespce } from "../utils/common";
import { useRef, useState, useEffect, useContext } from "react";
import { images } from "../utils/images";
import { signup } from "../utils/firebase";
import { Alert } from "react-native";
import { ProgressContext, UserContext } from "../contexts";
const Container = styled.View`
    flex:1;
    justify-content : center;
    align-items : center;
    background-color : ${({ theme }) => theme.background};
    padding: 20px 10px; 
`

const ErrorText = styled.Text`
    align-items : flex-start;
    width : 90%;
    height : 20px;
    margin-bottom : 10px;
    line-height : 20px;
    color : ${({ theme }) => theme.errorMessage};
`
const Signup = () => {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [passwordConfirm, setPasswordConfirm] = useState('');
    const [disabled, setIsDisabled] = useState(true);
    const [errorMessage, setErrorMessage] = useState('');
    const [photoURL, setPhotoURL] = useState(images.photo);
    const emailRef = useRef();
    const passwordRef = useRef();
    const passwordConfirmRef = useRef();
    const { spinner } = useContext(ProgressContext);
    const {dispatch} = useContext(UserContext);

    useEffect(() => {
        let _errorMessage = '';
        if (!name) {
            _errorMessage = 'Please enter your name.';
        } else if (!validateEmail(email)) {
            _errorMessage = 'Please verify your email.';
        } else if (password.length < 6) {
            _errorMessage = 'The password must contain 6 characters at least.';
        } else if (password !== passwordConfirm) {
            _errorMessage = 'Passwords need to match';
        } else {
            _errorMessage = '';
        }
        setErrorMessage(_errorMessage);
    }, [name, email, password, passwordConfirm])

    //조건에 따라 버튼 활성화/비활성화하기
    useEffect(() => {
        setIsDisabled(
            !(name && email && password && passwordConfirm && !errorMessage)
        )
    }, [name, email, password, passwordConfirm, errorMessage]);

    const _handleSignupButtonPress = async () => {
        try {
            spinner.start();
            const user = await signup({ email, password, photoURL, name });
            dispatch(user.email, user.uid);
            Alert.alert('Signup Scucess', user.email);
        } catch (error) {
            Alert.alert('Signup Error', error.message);
        } finally {
            spinner.stop();
        }
    };

    return (
        <KeyboardAwareScrollView
            contentContainerStyle={{ flex: 1 }}
            enableOnAndroid={true}
            extraHeight={10}
        >
            <Container>
                {/* 프로필 사진 */}
                <Image
                    url={photoURL}
                    rounded
                    showButton
                    onChangeImage={url => setPhotoURL(url)}
                />

                {/* 이름 입력 */}
                <Input
                    label="name"
                    value={name}
                    onChangeText={text => setName(text)}
                    onSubmitEditing={() => {
                        setName(name.trim());
                        emailRef.current.focus();
                    }}
                    onBlur={() => setName(name.trim())}
                    placeholder="Name"
                    returnKeyType="next"
                />

                {/* 이메일(아이디)입력 */}
                <Input
                    ref={emailRef}
                    label="Email"
                    value={email}
                    onChangeText={text => setEmail(removeWhitespce(text))}
                    onSubmitEditing={() => passwordRef.current.focus()}
                    placeholder="Email"
                    returnKeyType="next"
                />

                {/* 비밀번호 입력 */}
                <Input
                    ref={passwordRef}
                    label="Password"
                    value={password}
                    onChangeText={text => setPassword(removeWhitespce(text))}
                    onSubmitEditing={() => passwordConfirm.current.focus()}
                    placeholder="Password"
                    returnKeyType="done"
                    isPassword
                />
                {/* 비밀번호일치 여부를 작성하는 Input */}
                <Input
                    ref={passwordConfirmRef}
                    label="Password Confirm"
                    value={passwordConfirm}
                    onChangeText={text => setPasswordConfirm(removeWhitespce(text))}
                    onSubmitEditing={_handleSignupButtonPress}
                    placeholder="Password"
                    returnKeyType="done"
                    isPassword
                />

                {/* 에러메시지 출력 */}
                <ErrorText>{errorMessage}</ErrorText>
                <Button
                    title="Signup"
                    onPress={_handleSignupButtonPress}
                    disabled={disabled}
                />
            </Container>
        </KeyboardAwareScrollView>

    )
}
export default Signup;