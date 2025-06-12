import { StatusBar } from "react-native";
import RootStack from "./navigation/RootStack";
import { NavigationContainer } from "@react-navigation/native";
const App = () => {
    return (
        <NavigationContainer>
            <StatusBar barStyle="light-content"/>
            <RootStack/>
        </NavigationContainer>
    )
}
export default App;