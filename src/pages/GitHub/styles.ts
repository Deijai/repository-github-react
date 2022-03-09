import styled from 'styled-components';
import { api } from './../../services/api';

export const Container = styled.div``;
export const Header = styled.header`
  display: flex;
  align-items: center;
  justify-content: space-between;

  a {
    display: flex;
    align-items: center;
    text-decoration: none;
    color: a8a8b3;
    transition: color 0.2s;

    &:hover {
      color: #666666;
    }

    svg {
      margin-right: 4px;
    }
  }
`;
export const Logo = styled.img`
  width: 120px;
  height: 120px;
  border-radius: 50%;
`;

export const RepoInfo = styled.div`
  margin-top: 80px;
`;
export const RepoHeader = styled.div`
  display: flex;
  align-items: center;
`;
export const RepoContentHeader = styled.div`
  margin-left: 24px;
`;
export const RepoContent = styled.div``;

export const RepoImage = styled.img`
  width: 120px;
  height: 120px;
  border-radius: 50%;
`;

export const RepoTitle = styled.strong`
  font-size: 36px;
  color: #3d3d4d;
`;
export const RepoDescription = styled.p`
  font-size: 18px;
  color: #737380;
`;

export const List = styled.ul`
  display: flex;
  list-style: none;
  margin-top: 40px;
`;
export const Item = styled.li`
  & + li {
    margin-left: 80px;
  }
`;
export const ItemDesc = styled.strong`
  display: block;
  font-size: 36px;
  color: #3d3d4d;
`;
export const ItemSpan = styled.span`
  display: block;
  margin-top: 4px;
  color: #3d3d4d;
`;
