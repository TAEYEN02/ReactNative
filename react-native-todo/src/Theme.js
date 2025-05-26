// Theme.js
import styled from 'styled-components/native';

// 테마 색상 객체들
export const theme = {
  background: '#000',
  itemBackground: '#191970',
  main: '#B0C4DE',
  text: '#E6E6FA',
  done: '#483D8B',
};

export const lightTheme = {
  background: '#fff',
  itemBackground: '#008080',
  main: '#66CDAA',
  text: '#FAFAD2',
  done: '#008B8B',
};

export const calendarThemeDark = {
  backgroundColor: '#000000',
  calendarBackground: '#000000',
  textSectionTitleColor: '#ffffff',
  dayTextColor: '#ffffff',
  monthTextColor: '#ffffff',
  selectedDayBackgroundColor: '#4444ff',
  todayTextColor: '#ff4444',
  arrowColor: '#ffffff',
  // 필요에 따라 추가 설정 가능
};

export const calendarThemeLight = {
  backgroundColor: '#ffffff',
  calendarBackground: '#ffffff',
  textSectionTitleColor: '#333333',
  dayTextColor: '#000000',
  monthTextColor: '#222222',
  selectedDayBackgroundColor: '#4488ff',
  todayTextColor: '#ff4444',
  arrowColor: '#000000',
  // 필요에 따라 추가 설정 가능
};

// 스타일 컴포넌트들
export const Container = styled.SafeAreaView`
  flex: 1;
  background-color: ${({ theme }) => theme.background};
  align-items: center;
  justify-content: flex-start;
`;

export const Header = styled.View`
  flex-direction: row;
  align-items: center;
  justify-content: center;
  margin: 20px 0;
`;

export const Title = styled.Text`
  font-size: 40px;
  font-weight: 600;
  color: ${({ theme }) => theme.main};
  align-self: center;
  margin: 20px;
`;

export const List = styled.ScrollView`
  flex: 1;
  width: ${({ width }) => width - 40}px;
`;

export const Separator = styled.View`
  height: 1px;
  width: ${({ width }) => width - 40}px;
  background-color: ${({ theme }) => theme.main};
  opacity: 0.3;
  margin-bottom: 10px;
`;

export const Row = styled.View`
  flex-direction: row;
  align-items: center;
  margin-top: 8px;
`;

export const BarBackground = styled.View`
  flex: 1;
  height: 8px;
  background-color: ${({ theme }) => theme.background};
  border-radius: 4px;
  overflow: hidden;
`;

export const BarFill = styled.View`
  height: 8px;
  width: ${({ percent }) => percent}%;
  background-color: ${({ theme }) => theme.main};
`;

export const DayLabel = styled.Text`
  width: 28px;
  color: ${({ theme }) => theme.text};
  font-size: 12px;
`;

export const Card = styled.View`
  background-color: ${({ theme }) => theme.itemBackground};
  padding: 18px 22px;
  margin: 12px 20px;
  border-radius: 14px;
  elevation: 4;
  shadow-color: #000;
  shadow-opacity: 0.15;
  shadow-radius: 6px;
  shadow-offset: 0px 3px;
`;

export const Text = styled.Text`
  font-size: 14px;
  color: ${({ theme }) => theme.text};
`;
