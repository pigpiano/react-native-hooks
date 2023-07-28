import React, {useState, useEffect } from 'react';

import styled from 'styled-components/native';

// TextInput 컴포넌트를 이용해서 이메일과 이름을 입력받는 컴포넌트를 만든다.
const StyledTextInput = styled.TextInput.attrs({
    autoCapitalize: "none",
    autoCorrect: false,
}) `
    border: 1px solid #757575;
    padding: 10px;
    margin: 10px 0;
    width: 200px;
    font-size: 20px;
`;

const StyledText = styled.Text `
    font-size: 24px;
    margin: 10px;
`;

const Form = () => {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    // useEffect를 사용해서 컴포넌트가 렌더링될 때 마다 이름과 이메일이 출력되도록 작성.
    useEffect(() => {
        // console.log(`name: ${name}, email: ${email}\n`)
        console.log('\n ====== Form Component Mount ====== \n')
        return () => console.log('\n ====== Form Component Unmount ====== \n')
    }, []) // 이렇게 설정하면 이메일이 변경될 때만 useEffect가 동작하도록 설정. name이 변경될때는 작동하지 않는다.
    return(
        <>
        <StyledText>Name: {name}</StyledText>
        <StyledText>Email:{email}</StyledText>
        <StyledTextInput
            value={name}
            onChangeText={text => setName(text)}
            placeholder={"name"} />
        <StyledTextInput
            value={email}
            onChangeText={text => setEmail(text)}
            placeholder={"email"} />
        </>
    )

}

export default Form;