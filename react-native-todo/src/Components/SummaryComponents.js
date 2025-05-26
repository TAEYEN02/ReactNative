
import moment from 'moment';
import {
  Card,
  Title,
  Text,
  Row,
  BarBackground,
  BarFill,
  DayLabel,
} from '../Theme';

export const TodaySummary = ({ tasks }) => {
  const today = moment().format('YYYY-MM-DD');
  const todayTasks = Object.values(tasks).filter((t) => t.date === today);

  const completed = todayTasks.filter((t) => t.completed).length;
  const total = todayTasks.length;

  return (
    <Card>
      <Title>오늘의 리마인더</Title>
      <Text>
        총 {total}개의 할 일 중 {completed}개 완료
      </Text>
    </Card>
  );
};

export const WeeklySummary = ({ tasks }) => {
  const startOfWeek = moment().startOf('week'); // 일요일
  const days = Array.from({ length: 7 }, (_, i) =>
    startOfWeek.clone().add(i, 'days')
  );

  return (
    <Card>
      <Title>주간 리마인더</Title>
      {days.map((day) => {
        const dateStr = day.format('YYYY-MM-DD');
        const dailyTasks = Object.values(tasks).filter((t) => t.date === dateStr);
        const done = dailyTasks.filter((t) => t.completed).length;
        const total = dailyTasks.length;
        const percent = total ? (done / total) * 100 : 0;

        return (
          <Row key={dateStr}>
            <DayLabel>{day.format('dd')}</DayLabel>
            <BarBackground>
              <BarFill percent={percent} />
            </BarBackground>
          </Row>
        );
      })}
    </Card>
  );
};
