import React, {useState} from 'react'
// import { StatusBar } from 'expo-status-bar';
// import { StyleSheet, Text, View } from 'react-native';
import styled from 'styled-components';
// import Counter from './components/Counter';
import Form from './components/Form'
import Button from './components/Button'

const Container = styled.View `
    flex:1;
    background-color: white;
    justify-content: center;
    align-items: center;
`;

//1. App 컴포넌트에서 Counter 컴포넌트 사용하기
const App = () => {
    const [isVisible, setIsVisible] = useState(true);

  return (
    <Container>
        {/* <Counter /> */}
        <Button 
            title={isVisible ? 'Hide' : 'Show'}
            onPress = {() => setIsVisible(prev => !prev)}
             />
        {isVisible && <Form />}

    </Container>
  );
};

export default App