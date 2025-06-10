//채널 화면으로 이동할 수 있는 버튼을 가진 간단한 채널 생성 화면
import styled from "styled-components";
import { Input , Button} from "../components";
import { useContext, useEffect, useRef, useState } from "react";
import { ProgressContext } from "../contexts";
import { createChannel } from "../utils/firebase";
import { Alert } from "react-native";

const Container = styled.View`
    flex: 1;
    background-color: ${({ theme }) => theme.background};
    justify-content: center;
    align-items: center;
    padding: 0 20px;
`;

//에러 메시지를 표시할 텍스트
const ErrorText = styled.Text`
  align-items: flex-start;
  width: 100%;
  height: 20px;
  margin-bottom: 10px;
  line-height: 20px;
  color: ${({ theme }) => theme.errorMessage};
`;

const ChannelCreation = ({ navigation }) => {
    const [title, setTitle] = useState('');
    const [description, setDescription] = useState('');
    const [errorMessage, setErrorMessage] = useState('');
    const [disabled, setDisabled] = useState(true);

    const {spinner} =useContext(ProgressContext);

    const descriptionRef = useRef();

    useEffect(()=>{
        setDisabled(!(title && !errorMessage));
    },[title,description,errorMessage])

    const _handleTitleChange = (title) => {
        setTitle(title);
        setErrorMessage(title.trim() ? '' : 'Please enter the title');
    }

    //제목과 설명(옵션)을 입력하고 생성버튼을 눌렀을 때 
    //firestore에 채널 생성하기
    const _handleCreateButton = async() => {
        try {
            spinner.start();
            const id = await createChannel({title, description});
            navigation.replace('Channel',{id, title});
            console.log({id, title});
        } catch (error) {
            Alert.alert("Create Error", error.errorMessage);
        }finally{
            spinner.stop();
        }
    }

    //제목을 작성하고, 에러메시지가 없을 때 버튼 클릭 가능

    return (
        <Container>
            {/* 채팅방 제목을 작성할 input */}
            <Input
                label="Title"
                placeholder="Title"
                returnKeyType="next"
                maxLangth={20}
                onChangeText={_handleTitleChange}
                onSubmitEditing={()=>{
                    setTitle(title.trim());
                    descriptionRef.current.focus();
                }}
                onBlur = {()=>setTitle(title.trim())}
            />
            {/* 채팅방 설명을 작성할 input */}
            <Input 
                ref={descriptionRef}
                label="Description"
                value={description}
                placeholder="Description"
                maxLangth={40}
                onChangeText={(text)=>setDescription(text)}
                onSubmitEditing={()=>{
                    setDescription(description.trim())
                    _handleCreateButton();
                }}
                returnKeyType="done"
                onBlur={()=>setDescription(description.trim())}
            />
            {/* 에러메시지 표시 영역 */}
            <ErrorText>{errorMessage}</ErrorText>
            <Button
                title="Create"
                onPress={_handleCreateButton}
                disabled={disabled}
            />
            {/* 채널 생성 버튼 (비활성화 여부는 disabled state로 제어)
            버튼을 눌렀을 때 콘솔에 제목과 설명을 띄워주세요 */}
        </Container>
    )
}
export default ChannelCreation;
