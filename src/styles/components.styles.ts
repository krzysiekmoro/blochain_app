import styled from 'styled-components';

export const StyledHeader = styled.header`
  display: flex;
  flex-direction: row;
  height: 100%;
  width: 100%;
  align-items: center;
  justify-content: center;
  padding: 10px;

  background-color: #282c34;
  min-height: 10vh;
  font-size: calc(10px + 2vmin);
  color: white;
`;

export const StyledWrapper = styled.div`
  display: flex;
  flex-direction: column;
  height: 100%;
  width: 100%;
  background-color: red;
  align-items: center;
  justify-content: flex-end;
  padding: 10px;
`;

export const StyledFieldset = styled.fieldset`
  display: flex;
  flex-direction: row;
  height: 100%;
  width: auto;
  align-items: center;
  justify-content: flex-start;
  padding: 10px;
  border: none;
`;

export const StyledRadio = styled.div`
  display: flex;
  align-items: center;
  margin: 5px;
`;

export const StyledLabel = styled.label`
  margin-right: 15px;
  padding-left: 5px;
`;
