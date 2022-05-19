import styled from "styled-components";
import '../styles/App.css'; 

export const KeyboardSection = styled.section`
  height: 200px;
  width: 100%;
  display: flex;
  flex-direction: column;
  padding: 5px;
  margin: 5px;
`;

export const KeyboardRow = styled.div`
  width: 100%;
  margin: 0 auto 8px;

  display: flex;
  align-items: center;
  justify-content: space-around;
`;

export const KeyboardButton = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 0;
  margin: 0 6px 0 0;
  height: 58px;
  flex: 1;
  ${({ item }) => (item ? `flex: ${item};` : `flex: 1;`)}
  border: 0;
  border-radius: 4px;
  background-color: #818384;
  font-weight: bold;
  text-transform: uppercase;
  color: #d7dadc;

  cursor: pointer;
  user-select: none;

  &:last-of-type {
    margin: 0;
  }
`;

export const BackspaceIcon = () => (
  <svg
    xmlns="https://icon-library.com/images/backspace-icon/backspace-icon-15.jpg"
    height="24"
    viewBox="0 0 24 24"
    width="24"
  >
    <path
      fill="#d7dadc"
      d="M22 3H7c-.69 0-1.23.35-1.59.88L0 12l5.41 8.11c.36.53.9.89 1.59.89h15c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm0 16H7.07L2.4 12l4.66-7H22v14zm-11.59-2L14 13.41 17.59 17 19 15.59 15.41 12 19 8.41 17.59 7 14 10.59 10.41 7 9 8.41 12.59 12 9 15.59z"
    ></path>
  </svg>
);

export const Flex = styled.div`
  ${({ item }) => `flex: ${item};`}
`;
