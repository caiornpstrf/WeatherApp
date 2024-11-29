import React from 'react';
import { MainContainer, SafeArea, Title } from './style';

export type HeaderProps = {
  title: string;
};

export function Header({ title }: HeaderProps) {
  return (
    <SafeArea>
      <MainContainer>
        <Title>{title}</Title>
      </MainContainer>
    </SafeArea>
  );
}
