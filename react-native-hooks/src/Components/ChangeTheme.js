import { Button, Text, View } from "react-native";
import { useToggle } from "../hooks/useToggle";

export const ChangeTheme = () => {
    const { state, toggle } = useToggle(false);

    return (
        <View style={{
            flex: 1,
            alignItems:'center',
            justifyContent: 'center',
            backgroundColor: state ? '#fff' : 'gray',
            width: '100%'
        }}>
            <View style={{alignContent:'center',width:'50%'}}>
                <Button
                    title={state ? '배경 끄기' : '배경 켜기'}
                    onPress={toggle}
                    color={state ? '#1e90ff' : '#555'}
                />
            </View>


            <Text style={{ fontSize: 16, fontWeight: '600', color: '#000' }}>
                현재 상태 : {state ? 'On' : 'Off'}
            </Text>
        </View>
    )
}