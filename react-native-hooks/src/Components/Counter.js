import { useState } from "react";
import styled from 'styled-components';
import Button from "./Button";
import { View } from "react-native";

const CounterText  = styled.Text`
    font-size:24px;
    margin :  10px;
`
const Counter = () => {
    const [counter, setCounter] = useState(0);


    // const increment = () => setCounter(counter+1);
    // const decrement = () => setCounter(counter-1);
    return (
        <View>
            <CounterText>Counter : {counter}</CounterText>
            <Button title="+" onPress={()=>setCounter(prev=>prev+1)} />
            <Button title="-" onPress={()=>setCounter(prev=>prev-1)} />
        </View>
    )
}
export default Counter;