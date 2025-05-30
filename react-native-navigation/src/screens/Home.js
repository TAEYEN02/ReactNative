import React from 'react';
import { Button } from 'react-native';
import styled from 'styled-components/native';
import { SafeAreaView } from 'react-native-safe-area-context';

const Container = styled.View`
  flex: 1;
  justify-content: center;
  align-items: center;
`;

const StyledText = styled.Text`
  font-size: 30px;
  margin-bottom: 10px;
`;

//Stack.Screen에 등록만 하면 별도의 props 전달 없이도 자동으로 navigation객체가 주입된다.
const Home = ({ navigation }) => (
  <SafeAreaView style={{flex:1}}>
    <Container>
      <StyledText>Home</StyledText>
      <Button
        title="Go to List screen"
        onPress={() => navigation.navigate('List')}
      />
    </Container>
  </SafeAreaView>

);

export default Home;
