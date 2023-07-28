import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import styled from 'styled-components';
import Counter from './components/Counter';
import Form from './components/Form'

const Container = styled.View `
    flex:1;
    background-color: white;
    justify-content: center;
    align-items: center;
`;

//1. App 컴포넌트에서 Counter 컴포넌트 사용하기
const App = () => {
  return (
    <Container>
        {/* <Counter /> */}
        <Form />

    </Container>
  );
};

export default App