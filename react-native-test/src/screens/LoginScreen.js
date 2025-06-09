import { StyleSheet, Text, View } from "react-native";
import CoustomInput from "../components/CustomInput";
import Button from "../components/CustomButton";
import { useNavigation } from "@react-navigation/native";
import { useState } from "react";

const LoginScreen = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const navigation = useNavigation();

    const _handleLoginButton = async () => {
        try {
            console.log("로그인 버튼 클릭")
        } catch (error) {
            console.log('Error : ', error.message);
        }
    }
    return (
        <View style={styles.container}>
            <Text style={styles.title}>로그인</Text>
            <CoustomInput
                value={email}
                placeholder="이메일"
                onChangeText={setEmail}
            />
            <CoustomInput
                value={password}
                placeholder="비밀번호"
                onChangeText={setPassword}
                secureTextEntry={true}
            />
            <Button
                onPress={_handleLoginButton}
                title='로그인'
            />
            <Button
                onPress={() => navigation.navigate('SignupScreen')}
                title="회원가입"
                backgroundColor="lightgreen"
            />
        </View>
    )

}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
    },
    title: {
        fontSize: 24,
        fontWeight: "bold",
        marginBottom: 20,
    }
});
export default LoginScreen;