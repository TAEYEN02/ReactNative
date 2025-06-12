import { useCallback, useEffect, useState } from "react";
import { View, TextInput, StyleSheet, Alert } from "react-native";
import { createPost } from "../../api/posts";

const WriteScreen = ({ navigation }) => {
    const [title, setTitle] = useState("");
    const [description, setDescription] = useState("");
    const [author, setAuthor] = useState("");

    const onSubmit = useCallback(async () => {
        if (!title || !description || !author) {
            Alert.alert("제목, 내용, 작성자 이름을 모두 입력하세요.");
            return;
        }

        try {
            const postData = {
                title,
                author,
                description,
            };

            await createPost(postData);
            Alert.alert("게시글 등록 완료!");
            navigation.goBack();
        } catch (error) {
            Alert.alert("게시글 등록 실패", error.message);
        }
    }, [title, description, author]);

    useEffect(() => {
        navigation.setParams({ onSubmit });
    }, [title, description, author]);

    return (
        <View style={styles.container}>
            <TextInput
                placeholder="작성자 이름"
                placeholderTextColor="#fff"
                style={styles.authorInput}
                value={author}
                onChangeText={setAuthor}
            />
            <TextInput
                placeholder="제목"
                placeholderTextColor="#fff"
                style={styles.titleInput}
                value={title}
                onChangeText={setTitle}
            />
            <TextInput
                placeholder="내용을 입력하세요"
                placeholderTextColor="#fff"
                style={styles.description}
                value={description}
                onChangeText={setDescription}
                multiline={true}
                textAlignVertical="top"
            />
        </View>
    );
};

export default WriteScreen;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#121212",
        paddingHorizontal: 16,
        paddingTop: 8,
    },
    authorInput: {
        fontSize: 16,
        color: "#fff",
        borderBottomWidth: 1,
        borderBottomColor: "#333",
        marginBottom: 12,
        paddingVertical: 8,
    },
    titleInput: {
        fontSize: 16,
        fontWeight: "bold",
        color: "#fff",
        borderBottomWidth: 1,
        borderBottomColor: "#333",
        marginBottom: 12,
        paddingVertical: 8,
    },
    description: {
        flex: 1,
        fontSize: 16,
        color: "#fff",
    },
});
