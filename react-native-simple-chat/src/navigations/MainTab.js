import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { ChannelList, Profile } from "../screens";

const Tab = createBottomTabNavigator();

//BottomTab네비게이터 객체 생성 후 
const MainTab =()=>{
    return(
        //Channel List, Profile 컴포넌트를 스크린으로 받도록 설정
        <Tab.Navigator
            screenOptions={{
                headerShown:false,
            }}>
            <Tab.Screen
                name="Channel List"
                component={ChannelList}
                
            />
            <Tab.Screen
                name="Profile"
                component={Profile}
            />
        </Tab.Navigator>
    )
}
export default MainTab;