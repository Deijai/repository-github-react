import React, { ChangeEvent, useEffect, useRef, useState } from 'react';
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
  const [repos, setRepos] = useState<GitHubProps[]>(() => {
    const localStorageRepos = localStorage.getItem('@GitHub:repositories');

    if (localStorageRepos) {
      return JSON.parse(localStorageRepos);
    }
    return [];
  });
  const [repo, setRepo] = useState<string>('');
  const [error, setError] = useState('');
  const formEl = useRef<HTMLFormElement | null>(null);

  const handleRepos = (repo: ChangeEvent<HTMLInputElement>) => {
    setRepo(repo.target.value);
  };

  //MouseEventHandler
  const handleClick = async (e: FormEvent<HTMLFormElement>): Promise<void> => {
    e.preventDefault();

    if (!repo) {
      setError('Preencha o form corretamente!');
      return;
    }
    try {
      const response = await api.get<GitHubProps>(`/repos/${repo}`);
      const repository = response.data;

      console.error('repository: ', repository);

      if (repository) {
        setRepos([...repos, repository]);
        formEl.current?.reset();
        setRepo('');
      }
    } catch {
      setError('Informe um repositorio correto!');
    }
  };

  useEffect(() => {
    localStorage.setItem('@GitHub:repositories', JSON.stringify(repos));
  }, [repos]);

  return (
    <C.Container>
      <C.Logo src={logoImg} alt="logo" />
      <C.Title>Respositories of GitHub</C.Title>

      <C.ContainerForm ref={formEl} onSubmit={handleClick}>
        <C.Input
          type="text"
          value={repo}
          onChange={handleRepos}
          placeholder="username/repository_github"
        />
        <C.Button type="submit">Buscar</C.Button>
      </C.ContainerForm>

      {error && <C.ErrorMessage> {error} </C.ErrorMessage>}

      {repos !== undefined &&
        repos?.length > 0 &&
        repos.map((item, index) => (
          <RepositoryList
            key={index}
            imagem={item.owner.avatar_url}
            title={item.owner.login}
            description={item.description}
            full_name={item.full_name}
          />
        ))}
    </C.Container>
  );
};
