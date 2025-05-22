import { View, Text, Button, ScrollView } from 'react-native'
import MyButton from './Components/MyComponent';
import Counter from './Components/Counter';
import EventButton from './Components/EventButton';
import EnventInput from './Components/EventInput';
import PressableButton from './Components/PressableButton';

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
            <PressableButton title='PressAble'/>
            {/* <Counter/> */}
            {/* <EventButton/> */}
            {/* <EnventInput/> */}
            {/* <Text style={{ fontSize: 30}}>Button Component</Text>
            <MyButton title="button"/>
            {/* 컴포넌트 태그 사이에 전달된 값은
            자식 컴포넌트의 props에서 chiledren으로 전달된다. */}
            {/* <MyButton title="button">
                Children Props
            </MyButton> */}

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