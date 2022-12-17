import React from 'react';
import { Wrapper, Title } from './Styles.styled';
import { HookCounter, ClassCounter } from './Counter';

export const App = () => {
  return (
    <>
      <Title>HookCounter vs ClassCounter</Title>
      <Wrapper>
        <HookCounter />
        <ClassCounter />
      </Wrapper>
    </>
  );
};
