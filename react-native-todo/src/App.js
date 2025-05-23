import styled, { ThemeProvider } from "styled-components/native";
import { theme, lightTheme, calendarThemeDark, calendarThemeLight } from "./Theme";
import { Dimensions, StatusBar, Switch } from "react-native";
import Input from "./Components/Input";
import { useState } from "react";
import IconButton from "./Components/IconButton";
import { images } from "./image";
import Task from "./Components/Task";
import { Calendar } from 'react-native-calendars';

const Container = styled.SafeAreaView`
  flex: 1;
  background-color: ${({ theme }) => theme.background};
  align-items: center;
  justify-content: flex-start;
`;

const Header = styled.View`
  flex-direction: row;
  align-items: center;
  justify-content: center;
  margin: 20px 0;
`;

const Title = styled.Text`
  font-size: 40px;
  font-weight: 600;
  color: ${({ theme }) => theme.main};
  align-self: center;
  margin: 20px;
`;

const List = styled.ScrollView`
    flex: 1;
    width: ${({ width }) => width - 40}px;
`
const Separator = styled.View`
  height: 1px;
  width: ${({ width }) => width - 40}px;
  background-color: ${({ theme }) => theme.main};
  opacity: 0.3;
  margin-bottom: 10px;
`;

export default function App() {
    const [newTask, setNewTask] = useState('');
    const [tasks, setTasks] = useState({
        '1': { id: '1', text: 'Hanbit', completed: false, date: '2025-05-23' },
        '2': { id: '2', text: 'React Native', completed: true, date: '2025-05-24' },
        '3': { id: '3', text: 'Study', completed: false, date: '2025-05-23' },
        '4': { id: '4', text: 'Game', completed: false, date: '2025-05-25' },
    });


    const [isDark, setIsDark] = useState(true);
    const [selectedDate, setSelectedDate] = useState('');
    const toggleSwitch = () => setIsDark((prev) => !prev);

    const width = Dimensions.get('window').width;

    const _addTask = () => {

        if (!newTask || !selectedDate) return; // 날짜도 선택해야 추가 가능

        const ID = Date.now().toString();
        const newTaskObject = { [ID]: { id: ID, text: newTask, completed: false, date: selectedDate }, }
        setNewTask('');
        setTasks({ ...tasks, ...newTaskObject })
    }

    //Object.assign(target,...source)
    //target : 속성을 복사할 객체
    //source : 속성을 복사할 하나 이상의 원본 객체들
    const _deleteTask = (id) => {
        const currentTasks = Object.assign({}, tasks);
        delete currentTasks[id];
        setTasks(currentTasks);
    }

    const _checkTask = (id) => {
        const currentTasks = Object.assign({}, tasks);
        // id값에 해당하는 completed의 값
        currentTasks[id]['completed'] = !currentTasks[id]['completed'];
        setTasks(currentTasks);
    }
    const _updateTask = (item) => {
        //현재 배열을 복사해서 가져오고
        const currentTasks = Object.assign({}, tasks);
        //변경된 내용을 넣고
        currentTasks[item.id] = item;
        //state에 반영하기
        setTasks(currentTasks);
    }

    //포커스를 잃었을 때 발생하는 이벤트
    const _onBlur = () => {
        setNewTask('');
    }

    const _handelTextChange = (text) => {
        setNewTask(text);
    }
    // 날짜 선택 시 상태 업데이트
    const onDayPress = (day) => {
        setSelectedDate(day.dateString);
    };
    // 선택한 날짜의 할일만 필터링
    const tasksForSelectedDate = Object.values(tasks).filter(
        (task) => task.date === selectedDate
    );


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
                <Separator width={width} />
                <Input
                    placeholder="+ Add a Task"
                    value={newTask}
                    onChangeText={_handelTextChange}
                    onSubmitEditing={_addTask}
                    onBlur={_onBlur}
                />
                {/* 캘린더 추가 */}
                <Calendar
                    key={isDark ? 'dark' : 'light'} 
                    onDayPress={onDayPress}
                    markedDates={{
                        [selectedDate]: { selected: true, selectedColor: isDark ? calendarThemeDark.selectedDayBackgroundColor : calendarThemeLight.selectedDayBackgroundColor },
                    }}
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
                                .map((item) => (
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