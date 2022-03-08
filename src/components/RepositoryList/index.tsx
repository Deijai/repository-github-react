import React from 'react';
import * as C from './styles';

import { GoArrowRight } from 'react-icons/go';

export const RepositoryList: React.FC = () => {
  return (
    <C.Container>
      <C.Link href="#">
        <C.Image
          src="https://avatars.githubusercontent.com/u/14796276?v=4"
          alt="Logo Perfil"
        />
        <C.Content>
          <C.Title>https://github.com/Deijai/repository-github-react</C.Title>
          <C.Description>Meu repositorio no github</C.Description>
        </C.Content>
        <GoArrowRight size={24} color="" />
      </C.Link>
    </C.Container>
  );
};
