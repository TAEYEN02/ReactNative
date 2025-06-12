import { createStackNavigator } from "@react-navigation/stack";
import BoardScreen from "../screens/BoardScreen";
import WriteScreen from "../screens/WriteScreen";
import { Pressable, View, Text } from "react-native";
import { Ionicons } from '@expo/vector-icons'
import DetailScreen from "../screens/DetailScreen";
import SearchScreen from "../screens/SearchScreen";
const Stack = createStackNavigator();

const RootStack = () => {
    return (
        <Stack.Navigator
            screenOptions={{
                headerStyle: { backgroundColor: '#4B0082' },
                headerTintColor: 'white',
                headerTitleAlign: 'center',
                headerTitleStyle: { color: '#fff', fontSize: 21 }
            }}
        >
            <Stack.Screen
                name="Board"
                component={BoardScreen}
                options={({ navigation }) => ({
                    title: "Blog",
                    headerRight: () => (
                        <View style={{ flexDirection: "row", gap: 20, marginRight: 20 }}>
                            <Pressable onPress={() => navigation.navigate("Search")}>
                                <Ionicons name="search" size={24} color="#fff" />
                            </Pressable>
                            <Pressable onPress={() => alert('메뉴 기능 준비중')}>
                                <Ionicons name="menu" size={24} color="#fff" />
                            </Pressable>
                        </View>
                    )
                })}
            />


            <Stack.Screen
                name="Write"
                component={WriteScreen}
                options={({ navigation, route }) => ({
                    headerTitle: "글쓰기",
                    headerLeft: () => (
                        <Pressable onPress={() => navigation.goBack()}>
                            <Ionicons name="close" size={24} color="#fff" style={{ marginLeft: 20 }} />
                        </Pressable>
                    ),
                    headerRight: () => (
                        <Pressable
                            onPress={() => {
                                // route.params가 없거나 onSubmit이 없으면 아무 동작도 안 하도록 방어
                                if (route.params?.onSubmit) {
                                    route.params.onSubmit();
                                }
                            }}
                            style={{ marginRight: 20 }}
                        >
                            <View
                                style={{
                                    backgroundColor: "#BA55D3",
                                    paddingHorizontal: 14,
                                    paddingVertical: 6,
                                    borderRadius: 6,
                                }}
                            >
                                <Text style={{ color: "#fff", fontWeight: "bold" }}>등록</Text>
                            </View>
                        </Pressable>
                    ),
                })}
            />

            <Stack.Screen
                name="Detail"
                component={DetailScreen}
                options={{
                    title: '게시글 상세보기',  
                }}
            />
            <Stack.Screen
                name="Search"
                component={SearchScreen}
                options={{
                    title: "ID 검색",
                }}
            />
        </Stack.Navigator >
    )
}
export default RootStack;