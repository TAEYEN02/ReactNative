import { Image, Pressable, View, Text, StyleSheet } from "react-native";

const BookItem = ({ book, onPress }) => {
    return (
        <Pressable onPress={onPress} style={styles.container}>
            <Image source={{ uri: book.image }} style={styles.image} />
            <View>
                <Text style={styles.title}>{book.title}</Text>
                <Text>{book.author}</Text>
            </View>
        </Pressable>
    );
};
export default BookItem;

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        padding: 6,
        borderBottomWidth: 1,
        borderBottomColor: 'grey',
        alignItems: 'center'
    },
    image: {
        width: 50,
        height: 80,
        marginRight: 12
    },
    title: {
        fontWeight: 'bold',
        marginBottom: 4
    }
});
