import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import TodoSaveScreen from './screens/TodoSaveScreen';
import TodoListScreen from './screens/TodoListScreen';
import TodayReminderScreen from './screens/TodayReminderScreen';
import WeeklyReminderScreen from './screens/WeeklyReminderScreen';

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="TodoSave">
        <Stack.Screen name="TodoSave" component={TodoSaveScreen} options={{ title: 'ToDo 저장' }} />
        <Stack.Screen name="TodoList" component={TodoListScreen} options={{ title: 'ToDo List' }} />
        <Stack.Screen name="TodayReminder" component={TodayReminderScreen} options={{ title: '오늘의 리마인더' }} />
        <Stack.Screen name="WeeklyReminder" component={WeeklyReminderScreen} options={{ title: '주간 리마인더' }} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}