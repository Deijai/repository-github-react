import React, { useEffect, useState } from 'react';
import * as C from './styles';
import { Link, useParams } from 'react-router-dom';
import logo from '../../assets/logo.svg';
import { GoArrowLeft } from 'react-icons/go';
import { IssueList } from '../../components/IssueList';

import { api } from '../../services/api';

type GitHubProps = {
  full_name: string;
  owner: {
    login: string;
    avatar_url: string;
  };
  description: string;
  forks_count: number;
  stargazers_count: number;
  open_issues_count: number;
};

type GitHubIssue = {
  id: number;
  title: string;
  html_url: string;
  user: {
    login: string;
  };
};

export const GitHub: React.FC = () => {
  const params = useParams();
  const [repos, setRepos] = useState<GitHubProps | null>();
  const [issue, setIssue] = useState<GitHubIssue[]>([]);
  console.log(params);

  useEffect(() => {
    api.get(`repos/${params.owner}/${params.repository}`).then(response => {
      setRepos(response.data);
    });

    api
      .get(`repos/${params.owner}/${params.repository}/issues`)
      .then(response => {
        setIssue(response.data);
      });
  }, [params]);

  return (
    <C.Container>
      <C.Header>
        <C.Logo src={repos?.owner.avatar_url} alt={repos?.owner.login} />
        <Link to="/">
          <GoArrowLeft /> Voltar
        </Link>
      </C.Header>
      <C.RepoInfo>
        <C.RepoHeader>
          <C.RepoImage src={repos?.owner.avatar_url} alt="" />
          <C.RepoContentHeader>
            <C.RepoTitle>{repos?.full_name}</C.RepoTitle>
            <C.RepoDescription>{repos?.description}</C.RepoDescription>
          </C.RepoContentHeader>
        </C.RepoHeader>
        <C.RepoContent>
          <C.List>
            <C.Item>
              <C.ItemDesc>{repos?.stargazers_count}</C.ItemDesc>
              <C.ItemSpan>Stars</C.ItemSpan>
            </C.Item>
            <C.Item>
              <C.ItemDesc>{repos?.forks_count}</C.ItemDesc>
              <C.ItemSpan>Forks</C.ItemSpan>
            </C.Item>
            <C.Item>
              <C.ItemDesc>{repos?.open_issues_count}</C.ItemDesc>
              <C.ItemSpan>Issues Abertas</C.ItemSpan>
            </C.Item>
          </C.List>
        </C.RepoContent>
      </C.RepoInfo>

      {issue &&
        issue.length > 0 &&
        issue.map((item, index) => (
          <IssueList
            key={index}
            title={item.title}
            user={item.user.login}
            link={item.html_url}
          />
        ))}
    </C.Container>
  );
};
