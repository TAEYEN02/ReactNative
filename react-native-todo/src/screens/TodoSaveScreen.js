import React, { useState } from 'react';
import { View, Button, TextInput } from 'react-native';

const TodoSaveScreen = ({ navigation }) => {
  const [text, setText] = useState('');

  const handleNext = () => {
    // 나중에 저장 로직 추가 가능
    navigation.navigate('TodoList');
  };

  return (
    <View style={{ flex: 1, justifyContent: 'center', padding: 20 }}>
      <TextInput
        placeholder="할 일을 입력하세요"
        value={text}
        onChangeText={setText}
        style={{ borderWidth: 1, padding: 10, marginBottom: 10 }}
      />
      <Button title="다음 (ToDoList)" onPress={handleNext} />
    </View>
  );
};

export default TodoSaveScreen;
