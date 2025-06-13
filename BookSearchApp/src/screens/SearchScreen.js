import { useState } from "react"
import { Button, TextInput, View, StyleSheet, FlatList } from "react-native"
import { searchBooks } from "../api/neverApi";
import BookItem from "../components/BookItem";

const SearchScreen = ({ navigation }) => {

    const [input, setInput] = useState('');
    const [book, setBooks] = useState([]);

    const search = async () => {
        try {
            const results = await searchBooks(input);
            setBooks(results);
        } catch (error) {
            console.error("검색 오류:", error);
        }
    };
    return (
        <View style={styles.container}>
            <View style={styles.search}>
                <TextInput
                    placeholder="검색어를 입력해주세요"
                    value={input}
                    onChangeText={setInput}
                    style={styles.input}
                />
                <Button title="검색" onPress={search} />
            </View>

            <FlatList
                data={book}
                keyExtractor={(item) => item.isbn}
                renderItem={({ item }) => (
                    <BookItem book={item} onPress={() => navigation.navigate('Detail', { book: item })} />
                )}
            />
        </View>
    )
}
export default SearchScreen;

const styles = StyleSheet.create({
    container: {
        padding: 12,
    },
    search: {
        flexDirection: "row",
        alignItems: 'center',
        justifyContent: 'space-between',
    },
    input: {
        flex: 1,
        borderWidth: 1,
        borderColor: "lightgrey",
        padding: 8,
        marginRight: 8,
    }
})