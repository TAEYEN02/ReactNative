import styled, { ThemeContext } from "styled-components";
import { getCurrentUser, logout, updateUserPhoto } from "../utils/firebase";
import { UserContext } from "../contexts";
import { useContext, useState } from "react";
import { Button, Image, Input, Spinner } from "../components";
import { Alert } from "react-native";

const Container = styled.View`
     flex:1;
    justify-content : center;
    align-items : center;
    background-color : ${({ theme }) => theme.background};
    padding: 20px 10px; 
`

const Profile = () => {

    const { dispatch } = useContext(UserContext);
    //테마를 불러와서 사용하기
    const theme = useContext(ThemeContext);
    //유저를 불러와서 화면에 출력하기
    const user = getCurrentUser();
    const [photoUrl, setPhotoUrl] = useState(user.photo);
    const [isLoading, setIsLoading] = useState(false);


    const _handleLogoutButtonPress = async () => {
        setIsLoading(true);
        try {
            await logout();
        } catch (error) {
            console.log(`[Profile] logout : ${error.message}`)
        } finally {
            dispatch(null, null);;
            setIsLoading(false);
        }
    }
    const _handlePhotoChange = async url => {
        setIsLoading(true);
        try {
            const updateUser = await updateUserPhoto(url);
            setPhotoUrl(updateUser.photoUrl);
            dispatch(updateUser.email, user.uid);
        } catch (error) {
            Alert.alert('Photo Error', error.message);
        } finally {
            setIsLoading(false);
        }
    }


    return (
        <Container>
            {isLoading && <Spinner />}
            <Image
                url={photoUrl}
                showButton
                rounded
                onChangeImage={_handlePhotoChange}
            />
            <Input label="Name" value={user.name} disabled/>
            <Input label="email" value={user.email} disabled />
            <Button
                title="로그아웃"
                onPress={_handleLogoutButtonPress}
                conatinerStyle={{ marginTop: 30, backgroundColor: theme.buttonLogout }}
            />
        </Container>
    )
}
export default Profile;