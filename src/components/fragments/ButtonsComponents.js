import styled, { css } from 'styled-components';

export const Button = styled.button`
  width: calc(50% - 10px);
  text-decoration: none;
  display: flex;
  align-items: center;
  justify-content: center;
  height: 28px;
  margin: 10px 0;
  color: #fff;
  border: none;
  border-radius: 2px;

  ${props => props.red && css`
    background-color: #db2727;
    &:hover {
    	cursor: pointer;
    	background-color: #c32525;
  	}
  `}

  ${props => props.blue && css`
    background-color: #27aedb;
    &:hover {
    	cursor: pointer;
    	background-color: #209cc5;
  	}
  `}
`;
