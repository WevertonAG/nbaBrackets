import * as S from './styles';

const Card = () => {
  
  const team1 = {
    name: "Team 1",
    logo: "",
    titlesCount:0,
  }
  const team2= {
    name: "Team 2",
    logo: "",
    titlesCount:1,
  }
  return (

    <S.card>
      
        <S.team>
          <S.circle>
            <S.teamLogo src={team1.logo} alt="Logo do time" />
          </S.circle>
          <S.nameTeam>{team1.name}   {team1.titlesCount}</S.nameTeam>
        </S.team>
        <S.hr/>
        <S.team>
          <S.circle>
            <S.teamLogo src={team2.logo} alt="Logo do time" />
          </S.circle>
          <S.nameTeam>{team2.name}   {team2.titlesCount}</S.nameTeam>
        </S.team>
    </S.card>

  )

}
export default Card;