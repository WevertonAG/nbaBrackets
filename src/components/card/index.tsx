import * as S from "./styles";
import Team from "../team";

interface TeamProps {
  name: string;
  logo: string;
  titlesCount: number;
  active: boolean;
  conference: string;
}
type Props = {
  team1?: TeamProps | any;
  team2?: TeamProps | any;
  handleClickTeam?: (team: TeamProps) => void;
};

const Card = ({ team1, team2, handleClickTeam = () => {} }: Props) => {
  return (
    <S.card>
      <Team
        logo={team1?.logo}
        name={team1?.name}
        titlesCount={team1?.titlesCount}
        active={team1?.active}
        Team={team1}
        handleSelect={() => handleClickTeam(team1)}
      />
      <S.hr />
      <Team
        logo={team2?.logo}
        name={team2?.name}
        titlesCount={team2?.titlesCount}
        active={team1?.active}
        Team={team2}
        handleSelect={() => handleClickTeam(team2)}
      />
    </S.card>
  );
};
export default Card;
