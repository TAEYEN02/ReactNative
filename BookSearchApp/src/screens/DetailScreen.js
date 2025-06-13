import { Image, Text ,StyleSheet, ScrollView, View} from "react-native"

const DetailScreen = ({ route }) => {
    const { book } = route.params;

    return (
        <ScrollView style={styles.container}>
            <Image source={{ uri: book.image }} style={styles.image} />
            <Text style={styles.title}>{book.title}</Text>
            <Text style={styles.author}>저자: {book.author}</Text>
            <Text>가격: {book.discount}원</Text>
            <Text style={styles.description}>{book.description}</Text>
       </ScrollView>
    )
}
export default DetailScreen;

const styles = StyleSheet.create({
    container: {
        padding: 14
    },
    image: {
        width: 120,
        height: 140,
        alignSelf: 'center',
        marginBottom: 16
    },
    title: {
        fontSize: 16,
        fontWeight: 'bold',
        marginBottom: 10
    },
    author: {
        marginBottom: 4
    },
    description: {
        marginTop: 12
    }
});


