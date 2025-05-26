import { useState } from "react";
import { Alert, Button, Text, TextInput, View } from "react-native";
import { styles } from "./Component/layout";

export default function App() {
    const [userId, setUserId] = useState('');
    const [userPass, setUserPass] = useState('');
    const [userEmail, setUserEmail] = useState('');
    const [user, setUser] = useState('');

    const _submuit = () => {
        if (userId && userEmail && userPass) {
            const message = `입력된 id는 ${userId}, 이메일은 ${userEmail}입니다.`;
            setUser(message);
            Alert.alert(message);
        } else {
            const message = '아이디와 이메일을 입력해주세요.';
            setUser(message);
            Alert.alert(message);
        }
    }
    return (
        <View style={{flex:1}}>
            <View style={styles.header}>
                <Text style={styles.headerTitle}>SmartAppDev</Text>
            </View>
            <View style={styles.container}>
            <Text style={styles.title}>회원가입</Text>
            <View style={styles.box}>
                <Text style={styles.label}>아이디</Text>
                <TextInput style={styles.input} value={userId} onChangeText={setUserId} />
            </View>
            <View style={styles.box}>
                <Text style={styles.label}>비밀번호</Text>
                <TextInput style={styles.input} value={userPass} textContentType="password" onChangeText={setUserPass} />
            </View>
            <View style={styles.box}>
                <Text style={styles.label} >메일</Text>
                <TextInput style={styles.input} value={userEmail} onChangeText={setUserEmail} />
            </View>
            <View style={styles.button}>
                <Button onPress={_submuit} title="가입하기" />
            </View>
        </View>

        </View>
        
    )
}