import React, { useState } from "react";
import { View, TextInput, StyleSheet, FlatList, Pressable, Text, Alert } from "react-native";
import { useFocusEffect, useNavigation } from "@react-navigation/native";
import { getPostsByAuthor } from "../../api/posts"; // ← 방금 만든 함수

const SearchScreen = () => {
  const [author, setAuthor] = useState("");
  const [results, setResults] = useState([]);
  const navigation = useNavigation();

  useFocusEffect(
  React.useCallback(() => {
    const fetchPosts = async () => {
      if (!author.trim()) return; // author가 있으면만 호출
      try {
        const posts = await getPostsByAuthor(author);
        setResults(posts);
      } catch (e) {
        Alert.alert("검색 실패", "작성자 검색 중 오류가 발생했습니다.");
      }
    };

    fetchPosts();
  }, [author])
);

  const onSearch = async () => {
    if (!author.trim()) {
      Alert.alert("작성자 이름을 입력하세요.");
      return;
    }

    try {
      const posts = await getPostsByAuthor(author);
      setResults(posts);
    } catch (error) {
      Alert.alert("검색 실패", "작성자 검색 중 오류가 발생했습니다.");
    }
  };

  const renderItem = ({ item }) => (
    <Pressable
      onPress={() => navigation.navigate("Detail", { post: item })}
      style={styles.item}
    >
      <Text style={styles.title}>{item.title}</Text>
      <Text style={styles.meta}>작성자: {item.author} · 조회수: {item.views}</Text>
    </Pressable>
  );

  return (
    <View style={styles.container}>
      <TextInput
        placeholder="작성자 이름으로 검색"
        placeholderTextColor="#888"
        style={styles.input}
        value={author}
        onChangeText={setAuthor}
      />
      <Pressable onPress={onSearch} style={styles.button}>
        <Text style={styles.buttonText}>검색</Text>
      </Pressable>

      <FlatList
        data={results}
        keyExtractor={(item) => item.id.toString()}
        renderItem={renderItem}
        style={styles.list}
      />
    </View>
  );
};

export default SearchScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#121212",
    padding: 16,
  },
  input: {
    backgroundColor: "#121212",
    padding: 10,
    fontSize: 16,
    borderRadius: 8,
    marginBottom: 10,
    color:'#fff'
  },
  button: {
    backgroundColor: "#4B0082",
    padding: 12,
    borderRadius: 8,
    alignItems: "center",
    marginBottom: 16,
  },
  buttonText: {
    color: "#fff",
    fontWeight: "bold",
    fontSize: 16,
  },
  list: {
    marginTop: 8,
  },
  item: {
    padding: 16,
    backgroundColor: "#1E1E1E",
    borderRadius: 8,
    marginBottom: 12,
  },
  title: {
    fontSize: 16,
    color: "#fff",
    fontWeight: "bold",
  },
  meta: {
    color: "#aaa",
    marginTop: 4,
    fontSize: 14,
  },
});
