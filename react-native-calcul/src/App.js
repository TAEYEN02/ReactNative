import React, { useState } from 'react';
import { View, Text, TextInput, Button } from "react-native";
import { styles } from './Component/style';
 
export default function App() {
  const [number, setNumber] = useState('');
  const [number2, setNumber2] = useState('');
  const [select, setSelect] = useState('Enter number and Select Operation');
  const operators = ['+', '-', '*', '/'];

  const _result = (op) => {
    const a = parseFloat(number);
    const b = parseFloat(number2);

    if (Number.isNaN(a) || Number.isNaN(b)) {
      setSelect('값을 입력하세요');
      return;
    }

    switch (op) {
      case '+':
        setSelect(a + b);
        break;
      case '-':
        setSelect(a - b);
        break;
      case '*':
        setSelect(a * b);
        break;
      case '/':
        if (b === 0) {
          setSelect('0으로 나눌 수 없습니다');
        } else {
          setSelect(a / b);
        }
        break;
      default:
        setSelect('Enter numbers and Select Operation');
    }
  };

  return (
    <View style={styles.container}>
      {/* 숫자 입력 */}
      <TextInput
        style={styles.input}
        keyboardType="numeric"
        value={number}
        onChangeText={setNumber}
        placeholder="Enter first number"
      />
      <TextInput
        style={styles.input}
        keyboardType="numeric"
        value={number2}
        onChangeText={setNumber2}
        placeholder="Enter second number"
      />

      {select !== null && <Text style={styles.result}>{select}</Text>}
     
      <View style={styles.row}>
        {operators.map((op) => (
          <View key={op} style={styles.buttonWrapper}>
            <Button key={op} style={{hight: 10, weight : 50  }} title={op} onPress={() => _result(op)} />
          </View>
        ))}
      </View>
    </View>
  );
}
