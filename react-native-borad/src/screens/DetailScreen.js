import { useEffect, useState } from "react";
import { View, StyleSheet, Text, ActivityIndicator, Alert } from "react-native";
import { getPostById } from "../../api/posts";

const DetailScreen = ({ route }) => {
  const { post } = route.params;
  const [postDetail, setPostDetail] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchPost = async () => {
      try {
        const updatedPost = await getPostById(post.id); // 여기서 API 호출
        setPostDetail(updatedPost);
      } catch (error) {
        Alert.alert("오류", "게시글을 불러오는 중 문제가 발생했습니다.");
      } finally {
        setLoading(false);
      }
    };

    fetchPost();
  }, [post.id]);

  if (loading) {
    return (
      <View style={[styles.container, { justifyContent: "center", alignItems: "center" }]}>
        <ActivityIndicator size="large" color="#BA55D3" />
      </View>
    );
  }

  if (!postDetail) {
    return (
      <View style={styles.container}>
        <Text style={{ color: "white", textAlign: "center", marginTop: 20 }}>
          게시글을 불러올 수 없습니다.
        </Text>
      </View>
    );
  }

  return (
    <View style={styles.container}>
      <Text style={styles.title}>{postDetail.title}</Text>
      <Text style={styles.meta}>
        작성자: {postDetail.author}  {postDetail.time}  조회수: {postDetail.views}
      </Text>
      <Text style={styles.desc}>{postDetail.description}</Text>
    </View>
  );
};

export default DetailScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#121212",
  },
  title: {
    color: "white",
    fontWeight: "bold",
    fontSize: 24,
    marginLeft: 10,
    marginTop: 20,
  },
  meta: {
    color: "#FFE4E1",
    fontSize: 12,
    marginLeft: 10,
    marginTop: 10,
  },
  desc: {
    color: "white",
    marginTop: 10,
    marginLeft: 10,
    fontSize: 20,
  },
});
