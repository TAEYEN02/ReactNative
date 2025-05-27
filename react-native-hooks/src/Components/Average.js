import { useState, useMemo } from "react";
import { View, Text, Button } from "react-native";

const AverageCalculator = () => {
    const [number, setNumber] = useState([10, 20, 30, 40, 50]);
    const [extra, setExtra] = useState(0);

    //평균을 계산하는 로직(useMemo로 메모이제이션)
    const average = useMemo(() => {
        console.log("Calculating average...");
        const sum = number.reduce((acc, curr) => acc + curr, 0);
        return sum / number.length;
    }, [number]);
    //numbers에 변화가 생길때마다 재실행이 된다
 
    return (
        <View style={{ padding: 20 }}>
            <Text style={{ fontSize: 18 }}>Average : {average} </Text>
            {/* 배열에 랜덤 숫자를 추가하는 버튼 */}
            <Button title="Add Number" onPress={() => setNumber([...number, Math.floor(Math.random() * 100)])} />
            {/* 평균과는 상관없는 상태 변경 버튼 */}
            <Button title="Change Extra State" onPress={() => setExtra(extra + 1)} />

            <Text style={{ fontSize: 18, marginTop: 10 }}>
                Extra Value : {extra}
            </Text>
        </View>
    )
}

export default AverageCalculator;