import { StyleSheet, Text, View,Platform } from "react-native";
import { viewStyles, textStyles, errorStyles } from "./Style";
import { Content, Footer, Header } from "./Components/Layout";
import FlexDirectionTest from "./Components/FlexDirction";
import JustifyContent from "./Components/JustifyContent";
import ShadowBox from "./Components/ShadowBox";
import MyButton from "./Components/Buttons";

export default function App() {
    return (
        <View
             style={style.container}>
            {/* <Text style={[textStyles.text, {color:'green'}]}>Inline Style - Text</Text> */}
            {/* 여러개의 스타일을 적용해야 하는 경우 배열을 이용하여 style 속성에 
            여러 개의 스타일을 적용하면 된다
            뒤에 오는 스타일이 앞에 있는 스타일을 덮는다는 것을 기억해야한다. */}
            {/* <Text style={[textStyles.text,errorStyles.error]}>Inline Style - Text</Text> */}

            {/* <Header/>
            <Content/>
            <Footer/> */}
            {/* <FlexDirectionTest/> */}
            {/* <JustifyContent/> */}
            {/* {Platform.OS === "ios" ? (
                <Text>IOS에서 실행중</Text>
            ):(
                <Text>안드로이드에서 실행중</Text>
            )} */}
            {/* <Text>현제 플랫폼 버전 :{Platform.Version}</Text>
            {Platform.OS ==='android' && Platform.Version <  30 ? (
                <Text>이 기능은 Android 30 이상에만 지원됩니다</Text>
            ): <Text>현재 플랫폼에서 지원되는 기능입니다</Text>} */}

            {/* <ShadowBox/> */}
            <MyButton/>

        </View>
    )
}

// const style = StyleSheet.create({
//     container: {
//         flex: 1,
//         backgroundColor: "#fff",
//         alignItems: 'center',
//         justifyContent: 'center'
//     },
//     text: {
//         fontWeight: "600",
//         padding: 10,
//         color: "black",
//         fontSize: 30
//     },
//     error: {
//         fontWeight: '400',
//         color: 'red',
//     }
// })


const style = StyleSheet.create({
    container: {
        flex:1,
        alignItems:'center',
        justifyContent:'center',
        color:"white",
        backgroundColor: Platform.select({
            ios:'#96A5FF',
            android:'#6E9FED'
        }),
        alignItems: 'center',
        justifyContent: 'center'
    },

})