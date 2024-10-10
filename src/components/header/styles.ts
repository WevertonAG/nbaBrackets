import styled from "styled-components";

export const header = styled.header`
  width: 100%;
  height: 10vh;
  margin: 0;
  padding: 0;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background-color: #555;
  color: #24428a;
  .logoBox {
    display: flex;
    align-items: center;
    justify-content: center;
    max-width: 250px;
    max-height: 100%;

    height: 90%;
    background-color: #fff;
    border-radius: 6px;
  }
  .logo:hover {
    filter: drop-shadow(0 0 2em #24428a);
  }
  img {
    max-width: 200px;
    max-height: 75px;
    width: auto;
  }
`;
