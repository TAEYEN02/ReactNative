import {View,Text,Button} from 'react-native';
import {box_styles} from '../Style';
import { useState } from 'react';

const FlexDirectionTest = () => {
    const [direction, setDirection] = useState('row');
 
    return(
        <View style={box_styles.container}>
            <Text style={box_styles.title}>FlexDirection : {direction}</Text>
            <View style={[box_styles.boxContainer, {flexDirection : direction}]}>
                <View style={box_styles.box}><Text style={box_styles.boxText}>1</Text></View>
                <View style={box_styles.box}><Text style={box_styles.boxText}>2</Text></View>
                <View style={box_styles.box}><Text style={box_styles.boxText}>3</Text></View>
            </View>

            <View style={box_styles.buttons}>
                {/* 버튼 4개 만든다. title은 각각 row, coloum, row reverse, colum reverse로 각각 버튼을 눌렀을때 
                flexDirection을 실제로 변경 */}
                <Button title='row' onPress={()=>setDirection('row')}/>
                <Button title='coloum' onPress={()=>setDirection('coloumn')}/>
                <Button title='row-reverse' onPress={()=>setDirection('row-reverse')}/>
                <Button title='column-reverse' onPress={()=>setDirection('column-reverse')}/>
            </View>
        </View>
    )
}
export default FlexDirectionTest;