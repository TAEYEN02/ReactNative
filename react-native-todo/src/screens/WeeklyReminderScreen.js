import { WeeklySummary } from '../Components/SummaryComponents';

const WeeklyReminderScreen = ({ route }) => {
  const exampleTasks = {
    '2025-05-26': [{ id: '1', text: '예시', completed: true }],
    '2025-05-27': [{ id: '2', text: '예시2', completed: false }],
  };

  return <WeeklySummary tasks={exampleTasks} />;
};

export default WeeklyReminderScreen;
