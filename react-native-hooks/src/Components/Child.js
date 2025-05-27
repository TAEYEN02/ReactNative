import { Button, View } from "react-native";
const Child = ({changeCount})=>{
    return(
        <View>
            <Button title="+1" onPress={()=>changeCount(prev=>prev+1)}/>
        </View>
        
    )
}
export default Child;
