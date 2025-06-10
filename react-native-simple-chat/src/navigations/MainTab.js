import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { ChannelList, Profile } from "../screens";
import { MaterialIcons } from "@expo/vector-icons"
import { ThemeContext } from "styled-components";
import { useContext } from "react";
import { useNavigation } from "@react-navigation/native";

const Tab = createBottomTabNavigator();

//TabBarIcon이라는 컴포넌트를 만들고, 매개변수로 {focused, name}을 받는다.
//<MaterialIcons>를 반환한다. 속성은 name, size는 26, color는  
//모든 탭에 대해 선택되면 tabActiveColor로, 선택이 안되면 tabInActiveColor로 설정
//첫번째 스크린에 들어갈 아이콘의 name = chat-bubble, chat-bubble-outline
//두번째 스크린에 들어갈 아이콘의 name = person, person-outline
const TabBarIcon = ({ focused, name }) => {
    const theme = useContext(ThemeContext);
    return (
        <MaterialIcons
            name={name}
            size={26}
            color={focused ? theme.tabActiveColor : theme.tabInActiveColor}
        />
    )
}

//BottomTab네비게이터 객체 생성 후 
const MainTab = ({navigation,route}) => {
    //각 스크린에 대해 아이콘을 줘야한다.
    return (
        //Channel List, Profile 컴포넌트를 스크린으로 받도록 설정
        <Tab.Navigator
            screenOptions={({ route }) => ({
                headerTitleAlign:'center',
                tabBarIcon: ({ focused }) => {
                    let iconName;

                    if (route.name === "Channel List") {
                        iconName = focused ? "chat-bubble" : "chat-bubble-outline";
                    } else if (route.name === "Profile") {
                        iconName = focused ? "person" : "person-outline";
                    }

                    return <TabBarIcon focused={focused} name={iconName} />;
                },
            })}
        >
            <Tab.Screen
                name="Channel List"
                component={ChannelList}
                options={{
                    headerRight: () => (
                        <MaterialIcons
                            name="add"
                            size={26}
                            style={{ margin: 10 }}
                            onPress={() => navigation.navigate("Channel Creation")}
                        />
                    )
                }}
            />
            <Tab.Screen
                name="Profile"
                component={Profile}
            />
        </Tab.Navigator>
    )
}
export default MainTab;