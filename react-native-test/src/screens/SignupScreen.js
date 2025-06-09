import { StyleSheet, View ,Text} from "react-native";
import CoustomInput from "../components/CustomInput"
import { useNavigation } from "@react-navigation/native";
import { useState } from "react";
import Button from "../components/CustomButton";

const SignupScreen = () => {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const navigation = useNavigation();
    
    const _handleLoginButton = () => {
        console.log("회원가입 버튼 클릭")
    }

    return (
        <View style={styles.container}>
            <Text style={styles.title}>회원가입</Text>
            <CoustomInput
                value={name}
                onChangeText={setName}
                placeholder="이름"
            />
            <CoustomInput
                value={email}
                onChangeText={setEmail}
                placeholder="이메일"
            />
            <CoustomInput
                value={password}
                onChangeText={setPassword}
                placeholder="비밀번호"
                secureTextEntry={true}
            />
            <Button
                onPress={_handleLoginButton}
                title='회원가입'
            />
            <Button
                onPress={()=>navigation.navigate('LoginScreen')}
                title="로그인"
                backgroundColor="orange"
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
export default SignupScreen;