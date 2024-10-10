import * as S from "./styles";
import Team from "../team";

interface Team {
  name: string;
  logo: string;
  titlesCount: number;
  active: boolean;
  conference: string;
}
type Props = {
  team1?: Team | any;
  team2?: Team | any;
};

const Card = ({ team1, team2 }: Props) => {
  return (
    <S.card>
      <Team
        logo={team1?.logo}
        name={team1?.name}
        titlesCount={team1?.titlesCount}
        active={team1?.active}
      />
      <S.hr />
      <Team
        logo={team2?.logo}
        name={team2?.name}
        titlesCount={team2?.titlesCount}
        active={team1?.active}
      />
    </S.card>
  );
};
export default Card;
