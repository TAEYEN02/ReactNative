import { NavigationContainer } from "@react-navigation/native";
import StackNavigation from "./navigation/Stack";

const App = () => {
    return(
        //NavigationContainer : 해당 컴포넌트로 둘러싼 컴포넌트에 네비게이션 기능을 적용해주는 컴포넌트 
        <NavigationContainer>
            <StackNavigation/>
        </NavigationContainer>
    )
}
export default App;