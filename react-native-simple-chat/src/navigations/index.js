import { NavigationContainer } from "@react-navigation/native";
import AuthStack from "./AuthStack";
import { Spinner } from "../components";
import { ProgressContext, UserContext } from "../contexts";
import { useContext } from "react";
import MainStack from "./MainStack";
//Spinner.js -> 로딩화면
//로딩화면을 띄우는 여부를 Progress.js에 만들어놨다.
//전역적으로 사용하기 위해 Context를 사용하였다.

//inProgress의 값에 따라 <Spinner/> 컴포넌트를 호출하는 코드 작성
//User의 uid와 email 값이 존재하면 인증된 것으로 판단하고
//MainStack 네비게이션을 렌더링 해보자
//존재하지 않으면 AuthStack 네비게이션 렌더링

const Navigation = () => {
    const { inProgress } = useContext(ProgressContext);
    const { user } = useContext(UserContext);

    return (
        <NavigationContainer>
            {/* 옵셔널체이닝 : 객체의 속성이나 메서드에 접근할 때 null값이거나 undefined여도 에러가 나오지않고 
            undefined를 반환하도록 하는 문법 =>  "?." */}
            {user?.email && user?.uid ? <MainStack /> : <AuthStack />}
            {inProgress && <Spinner />}
        </NavigationContainer>
    )
}
export default Navigation;