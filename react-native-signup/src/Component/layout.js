import { StyleSheet } from "react-native";


export const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 24,
        backgroundColor: '#fff',
    },
    box: {
        flexDirection: "row",
        marginBottom: 20,
        justifyContent: 'center'
    },
    title: {
        fontSize: 28,
        textAlign: 'center',
        marginBottom: 32,
        fontWeight: 'bold',
        color: '#000',
    },
    label: {
        fontSize: 14,
        marginTop: 12,
        marginBottom: 4,
        color: 'gray',
        marginRight: 20,
        width: 80,
    },
    input: {
        borderBottomWidth: 1,
        borderBottomColor: '#000',
        width: 200

    },
    button: {
        marginTop: 24,
        borderRadius: 4,
        width: 200,
        justifyContent: 'center',
        alignSelf: 'center'
    },
    header: {
        height: 60,
        backgroundColor: 'skyblue',
        justifyContent: 'center',
        paddingHorizontal: 16,
    },
    headerTitle: {
        color: '#fff',
        fontSize: 18,
        fontWeight: 'bold',
    },
});