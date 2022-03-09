import React from 'react';
import * as C from './styles';
import { GoArrowRight } from 'react-icons/go';

type IssueListProps = {
  title: string;
  link: string;
  user: string;
};

export const IssueList: React.FC<IssueListProps> = ({ title, link, user }) => {
  return (
    <C.Container>
      <C.LinkA to={link}>
        <C.Content>
          <C.Title>{title}</C.Title>
          <C.Description>{user}</C.Description>
        </C.Content>
        <GoArrowRight size={24} color="" />
      </C.LinkA>
    </C.Container>
  );
};
