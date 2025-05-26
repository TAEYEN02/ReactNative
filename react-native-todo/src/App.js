import styled, { ThemeProvider } from "styled-components/native";
import { theme, lightTheme, calendarThemeDark, calendarThemeLight  ,Container, Header, Title, List } from "./Theme";
import { Dimensions, StatusBar, Switch } from "react-native";
import Input from "./Components/Input";
import { useState, useEffect } from "react";
import IconButton from "./Components/IconButton";
import { images } from "./image";
import Task from "./Components/Task";
import { Calendar } from 'react-native-calendars';
import AsyncStorage from "@react-native-async-storage/async-storage";
import { TodaySummary, WeeklySummary } from "./Components/SummaryComponents";


export default function App() {
  const [newTask, setNewTask] = useState('');
  const [tasks, setTasks] = useState({});
  const [isDark, setIsDark] = useState(true);
  const [selectedDate, setSelectedDate] = useState('');
  const width = Dimensions.get('window').width;

  const _saveTasks = async (tasks) => {
    try {
      await AsyncStorage.setItem('tasks', JSON.stringify(tasks));
      setTasks(tasks);
    } catch (error) {
      console.error(error);
    }
  };

  const _loadTasks = async () => {
    try {
      const loadTasks = await AsyncStorage.getItem('tasks');
      setTasks(JSON.parse(loadTasks || '{}'));
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    _loadTasks();
  }, []);

  const toggleSwitch = () => setIsDark(prev => !prev);

  const _addTask = () => {
    if (!newTask || !selectedDate) return; // 날짜도 선택해야 추가 가능
    const ID = Date.now().toString();
    const newTaskObject = { [ID]: { id: ID, text: newTask, completed: false, date: selectedDate } };
    setNewTask('');
    _saveTasks({ ...tasks, ...newTaskObject });
  };

  const _deleteTask = (id) => {
    const currentTasks = { ...tasks };
    delete currentTasks[id];
    _saveTasks(currentTasks);
  };

  const _checkTask = (id) => {
    const currentTasks = { ...tasks };
    currentTasks[id].completed = !currentTasks[id].completed;
    _saveTasks(currentTasks);
  };

  const _updateTask = (item) => {
    const currentTasks = { ...tasks };
    currentTasks[item.id] = item;
    _saveTasks(currentTasks);
  };

  const _onBlur = () => setNewTask('');

  const _handelTextChange = (text) => setNewTask(text);

  const onDayPress = (day) => setSelectedDate(day.dateString);

  // 선택한 날짜에 해당하는 할 일만 필터링
  const tasksForSelectedDate = Object.values(tasks).filter(task => task.date === selectedDate);

  // 할 일이 있는 날짜들을 표시할 markedDates 객체 만들기
  const markedDates = {};

  Object.values(tasks).forEach(task => {
    if (!markedDates[task.date]) {
      markedDates[task.date] = {
        marked: true,
        dotColor: isDark ? '#89CFF0' : '#1E90FF',  // 라이트블루 계열 색상
      };
    }
  });

  // 선택된 날짜에 selected 스타일 추가
  if (selectedDate) {
    markedDates[selectedDate] = {
      ...(markedDates[selectedDate] || {}),
      selected: true,
      selectedColor: isDark ? calendarThemeDark.selectedDayBackgroundColor : calendarThemeLight.selectedDayBackgroundColor,
    };
  }

  return (
    <ThemeProvider theme={isDark ? theme : lightTheme}>
      <Container>
        <StatusBar
          barStyle={isDark ? "light-content" : "dark-content"}
          backgroundColor={isDark ? theme.background : lightTheme.background}
        />
        <Header>
          <Title>TODO LIST</Title>
          <Switch
            onValueChange={toggleSwitch}
            value={isDark}
            trackColor={{ false: "#767577", true: "#81b0ff" }}
            thumbColor={isDark ? "#f5dd4b" : "#f4f3f4"}
            ios_backgroundColor="#3e3e3e"
          />
        </Header>

        <Input
          placeholder="+ Add a Task"
          value={newTask}
          onChangeText={_handelTextChange}
          onSubmitEditing={_addTask}
          onBlur={_onBlur}
        />
        <TodaySummary tasks={tasks} />
        <WeeklySummary tasks={tasks} />
        <Calendar
          key={isDark ? 'dark' : 'light'}
          onDayPress={onDayPress}
          markedDates={markedDates}
          theme={isDark ? calendarThemeDark : calendarThemeLight}
          style={{
            width: width - 40,
            borderRadius: 10,
            marginTop: 10,
          }}
        />
        <List width={width}>
          {selectedDate ? (
            tasksForSelectedDate.length > 0 ? (
              tasksForSelectedDate
                .slice()
                .reverse()
                .map(item => (
                  <Task
                    key={item.id}
                    item={item}
                    deleteTask={_deleteTask}
                    checkTask={_checkTask}
                    updateTask={_updateTask}
                  />
                ))
            ) : (
              <Title
                style={{
                  fontSize: 16,
                  color: theme.main,
                  textAlign: "center",
                  marginTop: 20,
                }}
              >
                선택한 날짜의 할일이 없습니다.
              </Title>
            )
          ) : (
            <Title
              style={{
                fontSize: 16,
                color: theme.main,
                textAlign: "center",
                marginTop: 20,
              }}
            >
              날짜를 선택해주세요.
            </Title>
          )}
        </List>
      </Container>
    </ThemeProvider>
  );
} 