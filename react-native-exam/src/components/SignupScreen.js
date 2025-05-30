import { useState, useEffect } from 'react';
import { Alert, SafeAreaView, StyleSheet, TextInput, View, Text, Pressable } from 'react-native';

const validateEmail = (email) => /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);

const SignupScreen = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [name, setName] = useState('');
    const [enabled, setEnabled] = useState(false);

    useEffect(() => {
        const _isok =
            validateEmail(email) && password.length >= 6 && name.trim() !== '';
        setEnabled(_isok);
    }, [email, password, name]);

    const handleSignup = () => {
        if (enabled) {
            Alert.alert('회원가입 완료!');
            return setEmail(''),setPassword(''),setName('');
        }
    };

    return (
        <SafeAreaView style={styles.safeArea}>
            <View style={styles.container}>
                <Text style={styles.title}>회원가입</Text>

                <TextInput
                    style={styles.input}
                    placeholder="이메일"
                    value={email}
                    onChangeText={setEmail}
                    keyboardType="email-address"
                />

                <TextInput
                    style={styles.input}
                    placeholder="비밀번호 (6자리 이상)"
                    value={password}
                    onChangeText={setPassword}
                    secureTextEntry={true}
                />

                <TextInput
                    style={styles.input}
                    placeholder="이름"
                    value={name}
                    onChangeText={setName}
                />

                <Pressable
                    onPress={handleSignup}
                    disabled={!enabled}
                    hitSlop={{ top: 30, bottom: 30, left: 50, right: 50 }}
                    style={[
                        styles.button,
                        {backgroundColor : enabled ? 'black' : 'darkgray'}
                    ]}
                >
                    <Text style={styles.text}>가입하기</Text>
                </Pressable>
            </View>
        </SafeAreaView>
    );
};

const styles = StyleSheet.create({
    safeArea: {
        flex: 1
    },
    container: {
        flex: 1,
        padding: 20,
        justifyContent: 'center',
    },
    title: {
        fontSize: 30,
        textAlign: 'center',
        marginBottom: 24,
    },
    input: {
        borderWidth: 1,
        borderColor: 'lightgray',
        marginBottom: 16,
        fontSize: 16,
        borderRadius: 4,
    },
    button: {
        marginTop: 16,
        padding: 15,
        borderRadius: 8,
        alignItems: 'center',
    },
    text: {
        color: '#fff',
        fontSize: 16,
    },
});

export default SignupScreen;
