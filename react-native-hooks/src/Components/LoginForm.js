import { useReducer } from "react";
import { View, Text, TextInput, Button, StyleSheet } from "react-native";
//로그인폼을 만들어야 하는데 다음과 같은 상태가 필요하다
//email(문자열)
//password(문자열)
//errorMessage(문자열)
//isSubmitting(논리형)
//isLoggedIn(논리형)
//상태가 많아지게 되면 관리가 복잡해지고, 로직이 흩어지게 된다.

const initialState = {
    email: '',
    password: '',
    errorMessage: '',
    isSubmitting: false,
    isLoggedIn: false

}

const loginReducer = (state, action) => {
    switch (action.type) {
        //dispatch로 넘겨오는
        case 'SET_EMAIL':
            return { ...state, email: action.payload };
        case 'SET_PASSWORD':
            return { ...state, password: action.payload };
        case 'LOGIN_START':
            return { ...state, isSubmitting: true, errorMessage: '' };
        case 'LOGIN_SUCCESS':
            return { ...state, isSubmitting: false, isLoggedIn: true };
        case 'LOGIN_FAILURE':
            return {
                ...state,
                isSubmitting: false,
                errorMessage: action.payload,
                password: '',
            };
        case 'LOGOUT':
            return { ...state, isLoggedIn: false, isSubmitting: false, email: '', password: '' };

        default:
            return state;
    }
};

export const LoginForm = () => {
    const [state, dispatch] = useReducer(loginReducer, initialState);

    const handleLogin = () => {
        dispatch({ type: 'LOGIN_START' });

        if (state.email === 'test@example.com' && state.password === '1234') {
            dispatch({ type: 'LOGIN_SUCCESS' });
        } else {
            dispatch({
                type: 'LOGIN_FAILURE',
                payload: '이메일 또는 비밀번호가 틀렸습니다'
            })
        }
    }
    const handleLogout = () => {
        dispatch({ type: 'LOGOUT' });
    }

    return (
        <View style={styles.container}>
            {state.isLoggedIn ? (
                <>
                    <Text style={styles.successText}>로그인에 성공했습니다</Text>
                    <Button title='로그아웃' onPress={handleLogout} />
                </>
            ) : (
                <>
                    <TextInput
                        style={styles.input}
                        placeholder="이메일을 입력하세요"
                        autoCapitalize="none"
                        keyboardType="email-address"
                        value={state.email}
                        onChangeText={(text) =>
                            dispatch({ type: 'SET_EMAIL', payload: text })
                        }
                    />

                    <TextInput
                        style={styles.input}
                        placeholder="비밀번호를 입력하세요"
                        secureTextEntry
                        value={state.password}
                        onChangeText={(text) =>
                            dispatch({ type: 'SET_PASSWORD', payload: text })
                        }
                    />

                    {state.errorMessage ? (
                        <Text style={styles.errorText}>{state.errorMessage}</Text>
                    ) : null}

                    <Button
                        title={state.isSubmitting ? 'ing...' : '로그인'}
                        onPress={handleLogin}
                        disabled={state.isSubmitting}
                    />
                </>
            )}
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        padding: 20,
        margin: 100,
    },
    input: {
        borderWidth: 1,
        borderColor: '#aaa',
        padding: 10,
        borderRadius: 5,
    },
    errorText: {
        color: 'red',
        marginBottom: 10,
    },
    successText: {
        fontSize: 18,
        color: 'green',
    }
})
