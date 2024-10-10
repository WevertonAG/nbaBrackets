import * as S from "./styles";

const Team = ({
  logo,
  name,
  titlesCount,
  active,
}: {
  logo: string;
  name: string;
  titlesCount: number;
  active: boolean;
}) => {
  const handleSelect = () => {
    console.log(logo, name, titlesCount, active, "slave");
    return (active = true);
  };
  return (
    <S.team onClick={handleSelect}>
      <S.circle>
        <S.teamLogo src={logo} />
      </S.circle>
      <S.nameTeam>{name}</S.nameTeam>
      <S.titles>{titlesCount}</S.titles>
    </S.team>
  );
};
export default Team;
