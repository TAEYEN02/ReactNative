import React, { useState } from 'react';
import { View, Text, FlatList, Button } from 'react-native';
import { Calendar } from 'react-native-calendars';
import Task from './Task';
import Input from './Input';

const TodoWithCalendar = () => {
  const [selectedDate, setSelectedDate] = useState(getToday());
  const [tasksByDate, setTasksByDate] = useState({
    // 초기값 예시
    '2025-05-23': [
      { id: '1', text: 'React 공부하기', completed: false },
      { id: '2', text: '산책하기', completed: true },
    ],
    '2025-05-24': [
      { id: '3', text: '서점 가기', completed: false },
    ],
  });

  const [newTaskText, setNewTaskText] = useState('');

  // 날짜 선택
  const handleDayPress = (day) => {
    setSelectedDate(day.dateString);
  };

  // 할 일 추가
  const addTask = () => {
    if (!newTaskText.trim()) return;

    const newTask = {
      id: Date.now().toString(),
      text: newTaskText,
      completed: false,
    };

    setTasksByDate(prev => ({
      ...prev,
      [selectedDate]: prev[selectedDate] ? [...prev[selectedDate], newTask] : [newTask],
    }));

    setNewTaskText('');
  };

  // 할 일 삭제
  const deleteTask = (id) => {
    setTasksByDate(prev => ({
      ...prev,
      [selectedDate]: prev[selectedDate].filter(task => task.id !== id),
    }));
  };

  // 체크 상태 토글
  const checkTask = (id) => {
    setTasksByDate(prev => ({
      ...prev,
      [selectedDate]: prev[selectedDate].map(task =>
        task.id === id ? { ...task, completed: !task.completed } : task
      ),
    }));
  };

  // 할 일 텍스트 수정
  const updateTask = (updated) => {
    setTasksByDate(prev => ({
      ...prev,
      [selectedDate]: prev[selectedDate].map(task =>
        task.id === updated.id ? updated : task
      ),
    }));
  };

  return (
    <View style={{ flex: 1, paddingTop: 50, paddingHorizontal: 10 }}>
      <Calendar
        onDayPress={handleDayPress}
        markedDates={{
          [selectedDate]: { selected: true, selectedColor: '#00adf5' },
        }}
      />

      {/* 새 할 일 입력창 */}
      <Input
        placeholder="새 할 일 입력"
        value={newTaskText}
        onChangeText={setNewTaskText}
        onSubmitEditing={addTask}
        onBlur={() => {}}
      />

      {/* 추가 버튼 (선택) */}
      <Button title="추가" onPress={addTask} />

      {/* 선택된 날짜의 할 일 목록 */}
      <FlatList
        data={tasksByDate[selectedDate] || []}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <Task
            item={item}
            deleteTask={() => deleteTask(item.id)}
            checkTask={() => checkTask(item.id)}
            updateTask={updateTask}
          />
        )}
        ListEmptyComponent={<Text style={{ padding: 20, textAlign: 'center' }}>할 일이 없습니다.</Text>}
      />
    </View>
  );
};

// 오늘 날짜 YYYY-MM-DD 형태로 반환
const getToday = () => {
  const today = new Date();
  return today.toISOString().split('T')[0];
};

export default TodoWithCalendar;
