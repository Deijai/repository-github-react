import styled from 'styled-components';
import { shade } from 'polished';

export const Container = styled.div``;
export const Title = styled.h1`
  font-size: 48px;
  color: #3a3a3a;
  line-height: 5px;
  margin-top: 80px;
`;

export const Logo = styled.img``;
export const ContainerForm = styled.form`
  margin-top: 40px;
  max-width: 700px;
  display: flex;
`;
export const Input = styled.input`
  flex: 1;
  height: 70px;
  padding: 0 24px;
  border: 2px solid #fff;
  border-radius: 5px 0 0 5px;
  color: #3a3a3a;
  border-radius: 0;
  outline: none;
  &::placeholder {
    color: #ccc;
  }
`;
export const Button = styled.button`
  width: 160px;
  background-color: #04d361;
  border-radius: 0 5px 5px 0;
  border: 0;
  color: #fff;
  cursor: pointer;
  font-weight: 400;
  transition: background-color 0.2s;
  &:hover {
    background-color: ${shade(0.2, '#04d361')};
  }
`;
