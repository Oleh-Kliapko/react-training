import React from 'react';
import { Wrapper, Title } from './Styles.styled';
import { HookCounter, ClassCounter } from './Counter';
import { Clicker1, Clicker2, DoubleClick } from './useEffectHook';

export const App = () => {
  return (
    <>
      <Title>HookCounter vs ClassCounter</Title>
      <Wrapper>
        <HookCounter />
        <ClassCounter />
      </Wrapper>
      <Clicker1 />
      <Clicker2 />
      <DoubleClick />
    </>
  );
};
