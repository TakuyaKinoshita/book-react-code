import styled from "styled-components";
export const StyledComponents = () => {
  return (
    <SContainer>
      <STitle>This is StyledComponents component</STitle>
      <SButton>button</SButton>
    </SContainer>
  )
}

const SContainer = styled.div`
  max-width: 900px;
  border: solid 1px #aaa;
  border-radius: 20px;
  padding: 8px;
  margin: 8px;
  display: flex;
  justify-content: space-around;
  align-items: center;
`;

const STitle = styled.p`
  margin: 0;
  color: #ddd;
`;

const SButton = styled.button`
  background-color: #ddd;
  border: none;
  padding: 8px;
  border-radius: 8px;
  &:hover {
    background-color: #aaa;
    color: #fff;
    cursor: pointer;
  }
`;