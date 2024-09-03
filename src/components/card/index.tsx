import * as S from './styles';
import { useSelector } from 'react-redux';
import { useTeams } from '../../redux/sliceTeams';
import { useEffect, useState } from 'react';
import axios from 'axios';


const Card = () => {
  const teams = useSelector(useTeams)
  const [allTeams, setAllTeams] = useState(teams)

  useEffect(() => {
    const getAllTeams = async () => {
      const response = await axios.get('http://localhost:8080/api/teams');
      setAllTeams(response.data);
      console.log("aqui é os dados");
      console.log(response.data);
    }
    getAllTeams()

  }, [])
  console.log(allTeams);

  return (

    <S.card>
      {allTeams ? allTeams.map((a: { name: string, logo: string,titlesCount: number, win: boolean }) =>
        <S.team>
          <S.circle>
            <S.teamLogo src={a.logo} alt="Logo do time" />
          </S.circle>
          <S.nameTeam>{a.name}   {a.titlesCount}</S.nameTeam>
          <p>{a.win}</p>
        </S.team>): null}
    </S.card>

  )

}
export default Card;