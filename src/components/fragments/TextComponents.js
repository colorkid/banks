import styled from 'styled-components'

export const TextTitle = styled.h1`
  width: 100%;
  color: #27aedb;
  text-align: center;
`;

export const Url = styled.a`
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 0 10px;
  height: 28px;
  margin: 10px;
  color: #fff;
  background-color: #27aedb;
  border-radius: 2px;
  text-decoration: none;
  cursor: pointer;
  &:hover {
    cursor: pointer;
    background-color: #209cc5;
  }
`;

export const WarningParagraph = styled.p`
  width: 100%;
  color: #db2727;
  font-size: 14px;
`;

export const SuccessParagraph = styled.p`
  width: 100%;
  color: #1FAF1F;
  font-size: 14px;
`;