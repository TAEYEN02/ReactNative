import { createStackNavigator } from "@react-navigation/stack";
import SearchScreen from "../screens/SearchScreen";
import DetailScreen from "../screens/DetailScreen";

const Stack = createStackNavigator();

const StackNavigation = () => {
    return (
        <Stack.Navigator>
            <Stack.Screen
                name="Search"
                component={SearchScreen}
                options={({ }) => ({
                    title: "도서검색"
                })}
            />
            <Stack.Screen
                name="Detail"
                component={DetailScreen}
                options={({ }) => ({
                    title: "상세정보"
                })}
            />
        </Stack.Navigator>
    )
}
export default StackNavigation;