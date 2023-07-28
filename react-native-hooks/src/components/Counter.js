import React, { useState } from 'react';
import styled from 'styled-components/native'
import Button from './Button';

const StyledText = styled.Text `
    font-size: 24px;
    margin: 10px;
`;

const Counter = () => {
// 숫자의 상태를 나타내는 count를 생성하고, Button 컴포넌트를 이용하여 클릭될 때마다 세터 함수를 이용해 상태를 변경하는 버튼 두개 만듦.
// 이제 App 컴포넌트에서 Counter 컴포넌트 사용해보기
  const [count, setCount] = useState(0);
  return (
    <>
        <StyledText>count: {count}</StyledText>
        <Button title="+"
                onPress={() => {
                    setCount(count + 1); // count 값을 변경하는 세터 함수. count변수는 세터 함수에 의해서만 변경가능
                }} />
        <Button title="-"
                onPress={() => {
                    setCount(count - 1);
                }} /> 
    </>
  )
}
export default Counter
