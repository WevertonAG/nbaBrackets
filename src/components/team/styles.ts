import styled from "styled-components";

export const team = styled.button`
  width: 100%;
  height: 100vh;
  margin: 0;
  padding: 0;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
`;
export const circle = styled.div`
  width: 50px;
  height: 50px;
  border-radius: 50%;
  background-color: #eee;
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const teamLogo = styled.img`
  max-width: 50px;
  max-height: 50px;
  width: auto;
  height: auto;
`;

export const nameTeam = styled.p`
  margin: 0;
  padding: 0;
  font-family: poppins;
  font-weight: 600;
  font-size: 20px;
  color: #fff;
  text-shadow: 0 3px 10px #fff;
`;
export const titles = styled.p`
  margin: 0;
  margin-right: 10px;
  padding: 0;
  font-family: poppins;
  font-weight: 600;
  font-size: 25px;
  color: #fff;
  text-shadow: 0 3px 10px #fff;
`;
