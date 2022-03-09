import React from 'react';
import * as C from './styles';

import { GoArrowRight } from 'react-icons/go';

type RepositoryListProps = {
  imagem: string;
  title: string;
  description: string;
  full_name: string;
};

export const RepositoryList: React.FC<RepositoryListProps> = ({
  imagem,
  title,
  description,
  full_name,
}) => {
  return (
    <C.Container>
      <C.LinkA to={`/github/${full_name}`}>
        <C.Image src={imagem} alt={description} />
        <C.Content>
          <C.Title>{title}</C.Title>
          <C.Description>{description}</C.Description>
        </C.Content>
        <GoArrowRight size={24} color="" />
      </C.LinkA>
    </C.Container>
  );
};
