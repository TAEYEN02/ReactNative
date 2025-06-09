import styled from "styled-components/native";
import { Text } from "react-native";

const CustomButton = styled.Pressable`
    width: 80%;
    padding: 14px;
    background-color: ${(props) => props.backgroundColor || "#3498db"};
    margin: 10px 0;
    border-radius: 8px;
    align-items: center;
`;


const Button = ({ title, onPress, backgroundColor }) => {
    return (
        <CustomButton onPress={onPress} backgroundColor={backgroundColor}>
            <Text style={{ color: "#ffff", fontWeight: "bold" }}>{title}</Text>
        </CustomButton>
    );
};

export default Button;
