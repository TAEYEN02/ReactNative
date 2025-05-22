import {View,Text,Button} from 'react-native';
import {box_styles} from '../Style';
import { useState } from 'react';


//justifyContent
//주 축을 따라 요소를 어떻게 배치할지 방식을 설정하는 속성
const JustifyContent = () => {
    const [justifyContent, setJustifyContent] = useState('flex-start');
 
    return(
        <View style={box_styles.container}>
            <Text style={box_styles.title}>JustifyContent : {justifyContent}</Text>
            <View style={[box_styles.boxContainer, {justifyContent : justifyContent}]}>
                <View style={box_styles.box}><Text style={box_styles.boxText}>1</Text></View>
                <View style={box_styles.box}><Text style={box_styles.boxText}>2</Text></View>
                <View style={box_styles.box}><Text style={box_styles.boxText}>3</Text></View>
            </View>

            <View style={box_styles.buttons}>
                {/* 버튼 4개 만든다. title은 각각 row, coloum, row reverse, colum reverse로 각각 버튼을 눌렀을때 
                flexDirection을 실제로 변경 */}
                <Button title='flex-start' onPress={()=>setJustifyContent('flex-start')}/>
                <Button title='center' onPress={()=>setJustifyContent('center')}/>
                <Button title='flex-end' onPress={()=>setJustifyContent('flex-end')}/>
                <Button title='space-between' onPress={()=>setJustifyContent('space-between')}/>
                <Button title='space-around' onPress={()=>setJustifyContent('space-around')}/>
                <Button title='space-evenly' onPress={()=>setJustifyContent('space-evenly')}/>
            </View>
        </View>
    )
}
export default JustifyContent;