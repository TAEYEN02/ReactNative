import { createStackNavigator } from "@react-navigation/stack"
import { Channel, ChannelCreation } from "../screens";
import { useContext } from "react";
import { ThemeContext } from "styled-components";
import MainTab from "./MainTab";

const Stack = createStackNavigator();

const MainStack = () => {
    const theme = useContext(ThemeContext);
    //ChannelCreateion
    //Channel
    //두개의 컴포넌트를 Screen으로 갖는 Stack네비게이션 만들기   
    return (
        <Stack.Navigator
            screenOptions={{
                headerTitleAlign: "center",
                headerTintColor: theme.headerTintColor,
                cardStyle: { backgroundColor: theme.backgroundColor },
                headerBackTitleVisible: false,
            }}
        >
            <Stack.Screen
                name="Main"
                component={MainTab}
                options={{
                    headerShown:false
                }}
            />
            <Stack.Screen
                name="Channel Creation"
                component={ChannelCreation}
            />
            <Stack.Screen
                name="Channel"
                component={Channel}
            />
        </Stack.Navigator>
    )

}
export default MainStack;