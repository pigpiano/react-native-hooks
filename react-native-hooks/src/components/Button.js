// Button 컴포넌트
import React from 'react';
import styled from 'styled-components/native';

const Container = styled.TouchableOpacity `
    background-color: blue;
    border-radius: 15px;
    padding: 15px 30px;
    margin: 10px 0px;
    justify-content: center;
`;

const Title = styled.Text `
    font-size: 24px;
    font-weight: 600;
    color: #ffffff;
`;

const Button = ({ title, onPress }) => {
    return (
        <Container onPress={onPress} >
            <Title>{title}</Title>
        </Container>
    )
};

export default Button;