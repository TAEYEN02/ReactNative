import { Pressable,Text } from "react-native";
const MyButton = () =>{
    return(
        <Pressable
            style={{
                backgroundColor:'#3498db',
                padding:10,
                margin:10,
                borderRadius:8,
                width:150,
                height:100
            }}
            onPress={()=>alert("click")}>

            <Text style={{fontSize:24, color:'#fff'}}>My Button</Text>
        </Pressable>
    )
}
export default MyButton;