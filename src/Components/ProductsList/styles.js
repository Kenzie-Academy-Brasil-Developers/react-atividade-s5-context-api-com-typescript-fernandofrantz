import styled from "styled-components";

export const GeneralBox = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  align-items: center;
`;

export const Ul = styled.ul`
  display: flex;
  flex-wrap: wrap;
`;

export const Li = styled.li`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 25%;

  img {
    width: 100px;
    height: 180px;
  }

  h6 {
    width: 150px;
  }

  button {
    width: 100px;
    height: 25px;
    border-radius: 20px;
    border: 2px solid green;
    background-color: lightgreen;
  }
`;
