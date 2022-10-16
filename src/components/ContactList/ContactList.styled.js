import styled from 'styled-components';

export const ButtonList = styled.button`
  cursor: pointer;
  background-color: whitesmoke;
  padding: 5px;
  width: 80px;
  margin-left: 10px;
  border-radius: 5px;
  border: 1px solid black;
  &:hover,
  &:focus {
    background-color: silver;
  }
`;

export const ListLi = styled.li`
  display: flex;
  justify-content: space-between;
  &:not(:last-child) {
    margin-bottom: 10px;
  }
`;
