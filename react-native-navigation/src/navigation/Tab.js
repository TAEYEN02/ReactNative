import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { Mail, Meet, Settings } from "../screens/TabScreens";
import { MaterialCommunityIcons } from "@expo/vector-icons";

const Tab = createBottomTabNavigator();

const TabIcon = ({ name, size, color }) => {
    return (
        <MaterialCommunityIcons name={name} size={size} color={color} />
    )
}

const TabNavigation = () => {

    return (
        <Tab.Navigator
            initialRouteName="Settings"
            screenOptions={({ route }) => ({
                tabBarIcon: props => {
                    let name = '';
                    if (route.name === 'Mail') name = 'email';
                    else if (route.name === 'Meet') name = 'video';
                    else name = 'cog';
                    return TabIcon({ ...props, name});
                },
                tabBarLabelPosition:'beside-icon',//라벨이 표시되는 위치
                tabBarShowLabel:false,//라벨을 숨긴다.
                tabBarStyle:{
                    backgroundColor:'#CCE1FF',
                    borderTopColor: '#28288C',
                    borderTopWidth:2,
                },
                tabBarActiveTintColor:"#4646CD", //선택된 아이콘의 색깔
                tabBarInactiveTintColor:"3C3C8C", //선택되지 않은 아이콘의 색깔
                headerStyle:{
                    backgroundColor:'#288CD2',
                    height:100,
                    borderBottomWidth:2,
                    borderBottomColor:'#28288C'
                }

            })}
        >
            <Tab.Screen
                name="Mail"
                component={Mail}
                options={{
                    tabBarLabel:'Inbox',
                    tabBarIcon:props => TabIcon({...props, name:props.focused ? 'email':'email-outline'})
            }}
            />
            <Tab.Screen
                name="Meet"
                component={Meet}
                 options={{
                    tabBarLabel:'Inbox',
                    tabBarIcon:props => TabIcon({...props, name:props.focused ? 'video':'video-outline'})
            }}
            />
            <Tab.Screen
                name="Settings"
                component={Settings}
                 options={{
                    tabBarLabel:'Inbox',
                    tabBarIcon:props => TabIcon({...props, name:props.focused ? 'cog':'cog-outline'})
            }}
            />
        </Tab.Navigator>
    )
}
export default TabNavigation;