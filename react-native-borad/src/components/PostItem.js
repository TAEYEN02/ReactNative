import { StyleSheet, View, Text } from "react-native";

const PostItem = ({ post }) => {
    const formattedDate = post.time ? new Date(post.time).toLocaleDateString() : "";
    console.log("post.time:", post.time);
    return (
        <View style={styles.container}>
            <Text style={styles.title}>{post.title}</Text>
            <Text style={styles.meta}>
                {post.author} 조회 {post.views} {"  "} {/* 띄어쓰기용 */}
                {formattedDate}
            </Text>
            <Text style={styles.description}>{post.description}</Text>
        </View>
    );
};

export default PostItem;

const styles = StyleSheet.create({
    container: {
        padding: 12,
        borderBottomWidth: 0.5,
        borderBottomColor: '#C71585',
        backgroundColor: '#121212',
    },
    title: {
        color: '#fff',
        fontWeight: 'bold',
        fontSize: 15,
        marginBottom: 4,
    },
    meta: {
        color: '#FFE4E1',
        fontSize: 12,
        marginBottom: 4,
    },
    description: {
        color: '#ddd',
        fontSize: 14,
    },
});
