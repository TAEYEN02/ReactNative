import { TodaySummary } from '../Components/SummaryComponents'; // TodaySummary를 정의한 컴포넌트

const TodayReminderScreen = ({ tasks }) => {
  // tasks를 props로 받아서 넘겨줘야 합니다. 지금은 예시용
  const exampleTasks = {
    '2025-05-27': [{ id: '1', text: '예시 할 일', completed: false }],
  };

  return <TodaySummary tasks={exampleTasks} />;
};

export default TodayReminderScreen;
