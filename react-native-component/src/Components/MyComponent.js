import PropTypes from "prop-types";
import { Button, Pressable, Text } from "react-native";



//타이틀에는 문자열이 넘어오지만, propsTypes를 이요해 title에 
//전달되어야 하는 값의 타입이 숫자여야한다고 지정을 했다.


//let props = {"title" : "button"}

//defaulProps가 작동이 안되는 경우
//구조분해할당으로 기본값을 부여한다
const MyButton = ({ title = "Button", children , onPress }) => {
    return (
        <Pressable
            style={{
                backgroundColor: '#3498db',
                padding: 16,
                margin: 10,
                borderRadius: 8,
            }}
            onPress={onPress}
            >

            <Text style={{ fontSize: 24, color: '#fff' }}>{children || title}</Text>
        </Pressable>
    );
};


//jdk17 버전 부터는 안되기 때문에 구조분해 할당으로 해야함
MyButton.defaultProps = {
    title: "Button",
}

MyButton.propTypes = {
    title: PropTypes.number
}

export default MyButton;