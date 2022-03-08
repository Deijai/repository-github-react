import styled from 'styled-components';

export const Container = styled.div`
  margin-top: 80px;
  max-width: 700px;
`;
export const Link = styled.a`
  background-color: #fff;
  border-radius: 5px;
  width: 100%;
  padding: 24px;
  display: flex;
  align-items: center;
  transition: transform 0.7;

  svg {
    margin-left: auto;
    color: #cbcbd6;
  }

  &:hover {
    transform: translateX(6px);
    opacity: 0.7;

    & + a {
      margin-top: 16px;
    }
  }
`;
export const Image = styled.img`
  width: 64px;
  height: 64px;
  border-radius: 50%;
`;
export const Content = styled.div`
  margin: 0 16px;
  flex: 1;
`;
export const Title = styled.strong`
  font-size: 20px;
  color: #3d3d4d;
`;
export const Description = styled.p`
  font-size: 18px;
  color: #a8a8b3;
  margin-top: 4px;
`;
