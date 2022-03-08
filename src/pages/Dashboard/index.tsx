import React from 'react';
import * as C from './styles';
import logoImg from '../../assets/logo.svg';
import { RepositoryList } from '../../components/RepositoryList';

export const Dashboard: React.FC = () => {
  return (
    <C.Container>
      <C.Logo src={logoImg} alt="logo" />
      <C.Title>Respositories of GitHub</C.Title>

      <C.ContainerForm>
        <C.Input type="text" placeholder="username/repository_github" />
        <C.Button type="submit">Buscar</C.Button>
      </C.ContainerForm>

      <RepositoryList />
    </C.Container>
  );
};
