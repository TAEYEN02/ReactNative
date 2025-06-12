import { View, StyleSheet, FlatList, Pressable } from "react-native";
import PostItem from "../components/PostItem";
import FloatingButton from "../components/FloatingButton";
import { getAllPosts } from "../../api/posts";
import { useState, useEffect, useCallback } from "react";
import { useFocusEffect } from "@react-navigation/native";

const BoardScreen = ({ navigation }) => {

    //fetch나 axios를 통해서 읽어온 데이터들을 state에 담아서
    //FlatList에 출력
    const [posts, setPosts] = useState([]);

    useFocusEffect(
        useCallback(() => {
            fetchPosts();
        }, [])
    );
    const fetchPosts = async () => {
        try {
            const data = await getAllPosts();
            console.log("불러온 게시글 데이터:", data);
            setPosts(data);
        } catch (error) {
            alert("게시글을 불러오는데 실패했습니다.");
        }
    };

    return (
        <View style={styles.container}>
            <FlatList
                data={posts}
                keyExtractor={(item) => item.id.toString()}
                renderItem={({ item }) => (
                    <Pressable onPress={() => navigation.navigate('Detail', { post: item })}>
                        <PostItem post={item} />
                    </Pressable>
                )}
            />
            <FloatingButton onPress={() => navigation.navigate('Write')} />
        </View>
    )
}
export default BoardScreen;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#121212",
    }
})