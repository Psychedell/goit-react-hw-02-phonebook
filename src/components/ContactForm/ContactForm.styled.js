import styled from 'styled-components';

export const FormLabel = styled.label`
  display: flex;
  flex-direction: column;
  border: 1px solid silver;
  border-radius: 5px;
  padding: 5px;
`;

export const Button = styled.button`
  cursor: pointer;
  background-color: whitesmoke;
  padding: 6px 10px;
  width: 120px;
  border-radius: 5px;
  border: 1px solid black;
  &:hover,
  &:focus {
    background-color: silver;
  }
`;
