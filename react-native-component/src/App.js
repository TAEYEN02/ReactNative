import { View, Text, Button, ScrollView } from 'react-native'
import MyButton from './Components/MyComponent';

const App = () => {
    return (
        // <View
        //     style={{
        //         flex:1,
        //         backgroundColor:'afff',
        //         alignItems:'center',
        //         justifyContent:'center',
        //     }}
        // >
        //     <Text style={{fontSize:30, marginBottom:10}}>Botton Component</Text>
        //     <Button title='button' onPress={()=>alert('Click')}/>
        // </View>
        <View style={{
            flex: 1,
            margin:10,
            backgroundColor: '#fff',
            alignContent: 'center',
            justifyContent: 'center',
            alignItems:'center',
        }}>
            <Text style={{ fontSize: 30, marginBottom: 10 }}>Button Component</Text>
            <MyButton/>

            {/* <ScrollView> */}
            {/* 길이 20의 배열을 만들어 인덱스 i기준으로 0~19까지 반복
            왜 _로 쓰는가 : 변수 이름을 _로 쓰는것은 이 값을 사용하지 않겠다는 의미 */}
            {/* {Array.from({ length: 20 }, (_, i) => (
                    <View key={i}>
                        <Text>Item {i + 1}</Text>
                    </View>
                ))}
            </ScrollView> */}
        </View>

    )
}
export default App;