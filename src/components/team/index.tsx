import * as S from "./styles";

interface Team {
  name: string;
  logo: string;
  titlesCount: number;
  active: boolean;
  conference: string;
}

const Team = ({
  logo,
  name,
  titlesCount,
  active,
  Team,
  handleSelect,
}: {
  logo: string;
  name: string;
  titlesCount: number;
  active: boolean;
  Team: Team;
  handleSelect: (team: Team) => void;
}) => {
  return (
    <S.team onClick={() => handleSelect(Team)}>
      <S.circle>
        <S.teamLogo src={logo} />
      </S.circle>
      <S.nameTeam>{name}</S.nameTeam>
      <S.titles>{titlesCount}</S.titles>
    </S.team>
  );
};
export default Team;
