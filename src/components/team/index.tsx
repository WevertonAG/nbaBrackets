import * as S from './styles';

const Team =({logo,name, titlesCount}:{logo:string; name:string; titlesCount: number})=>{

    return(
        <S.team>
            <S.circle>
                <S.teamLogo src={logo}/>
            </S.circle>
            <S.nameTeam>{name}</S.nameTeam>
            <S.titles>{titlesCount}</S.titles>
        </S.team>
    )
}
export default Team;
