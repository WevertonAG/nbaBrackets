import styled from "styled-components";

export const card = styled.div`
  width: 300px;
  height: 100vh;
  display: flex;
  background-color: #71a5f2;
  flex-direction:column;
  margin-left: 10px;
  margin-top: 10px;
  padding-left: 4px;
  box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 15px;
  border-radius: 6px;

`;

export const circle = styled.div`
  width: 60px;
  height: 60px;
  border-radius: 50%;
  background-color: #eee;
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const teamLogo = styled.img `
  max-width: 50px;
  max-height: 50px;
  width: auto;
  height: auto;
`;

export const hr = styled.hr `
  width: 98%;
  margin: 0%;
  padding: 0%;
`;
export const team = styled.div`
  width: 100%;
  height: 70px;
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  align-items:center;

`;

export const nameTeam = styled.p `
  margin:0;
  margin-left: 15px;
  padding:0;
  font-family: poppins;
  font-weight: 600;
  font-size: 30px;
  color: #fff;
  text-shadow: 0 3px 10px #fff;

`;