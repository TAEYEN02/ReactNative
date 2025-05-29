import { useReducer } from "react";
import { View, Text, Button } from "react-native";

const initialState = { count: 0 };

const reducer = ({ state, action }) => {
    switch (action.type) {
        case 'INCREMENT':
            return { count: state.count + 1 };
        case 'DECREMENT':
            return { count: state.count - 1 };
        default:
            return state;
    }
}

export default Counter2 = () => {
    const [state, dispatch] = useReducer(reducer, initialState);

    //dispatch함수는 인자로 전달된 action값을 reducer함수에 전달하고 역할이 끝난다.
    return (
        <View style={{ alignContent: 'center', justifyContent: 'center', flex: 1 }}>
            <Text style={{ fontSize: 30 }}>Count : {state.count}</Text>
            <Button title="+" onPress={() => dispatch({ type: 'INCREMENT' })} />
            <Button title="-" onPress={() => dispatch({ type: 'DECREMENT' })} />
        </View>
    )
}