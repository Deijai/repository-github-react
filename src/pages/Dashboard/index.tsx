import React, { ChangeEvent, useState } from 'react';
import * as C from './styles';
import logoImg from '../../assets/logo.svg';
import { RepositoryList } from '../../components/RepositoryList';

import { api } from '../../services/api';
import { FormEvent } from 'react';

type GitHubProps = {
  full_name: string;
  owner: {
    login: string;
    avatar_url: string;
  };
  description: string;
};

export const Dashboard: React.FC = () => {
  const [repos, setRepos] = useState<GitHubProps[]>([]);
  const [repo, setRepo] = useState<string>('');

  const handleRepos = (repo: ChangeEvent<HTMLInputElement>) => {
    setRepo(repo.target.value);
  };

  //MouseEventHandler
  const handleClick = async (e: FormEvent<HTMLFormElement>): Promise<void> => {
    e.preventDefault();
    const response = await api.get<GitHubProps>(`/repos/${repo}`);
    const repository = response.data;

    console.error('repository: ', repository);

    if (repository) {
      setRepos([...repos, repository]);
      setRepo('');
    }
  };

  return (
    <C.Container>
      <C.Logo src={logoImg} alt="logo" />
      <C.Title>Respositories of GitHub</C.Title>

      <C.ContainerForm onSubmit={handleClick}>
        <C.Input
          type="text"
          value={repo}
          onChange={handleRepos}
          placeholder="username/repository_github"
        />
        <C.Button type="submit">Buscar</C.Button>
      </C.ContainerForm>

      {repos !== undefined &&
        repos?.length > 0 &&
        repos.map((item, index) => (
          <RepositoryList
            key={index}
            imagem={item.owner.avatar_url}
            title={item.owner.login}
            description={item.description}
          />
        ))}
    </C.Container>
  );
};
