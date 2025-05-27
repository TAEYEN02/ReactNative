import { useState } from "react";
import { Text, View } from "react-native";
import Child from "./Child";
import parseErrorStack from "react-native/Libraries/Core/Devtools/parseErrorStack";

const Parent = () =>{
    const [count,setCount] = useState(0);

    return(
        <View>
            <Text>Count : {count}</Text>
            <Child changeCount = {setCount}/>
        </View>
    )
}
export default Parent;