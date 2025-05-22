import { StyleSheet, View, Text } from 'react-native';

export const Header = () => {
    return (
        <View style={[style.container, style.header]}>
            <Text style={style.text}>Header</Text>
        </View>
    )
}

export const Content = () => {
    return (
        <View style={[style.container, style.content]}>
            <Text style={style.text}>content</Text>
        </View>
    )
}

export const Footer = () => {
    return (
        <View style={[style.container, style.footer]}>
            <Text style={style.text}>Footer</Text>
        </View>
    )

}

const style = StyleSheet.create({
    container: {
        flex:1,
        width: '100%',
        alignContent: 'center',
        justifyContent: 'center',
        alignItems:'center',
    },
    header: {
        flex:1,
        backgroundColor: '#93DAFF',
    },
    content: {
        flex:4 ,
        backgroundColor: '#EBFBFF',
        height: 640
    },
    footer: {
        flex:1,
        backgroundColor: '#87CEFA'
    },
    text: {
        fontSize: 26,
    }
})