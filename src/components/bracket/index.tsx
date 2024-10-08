import * as S from './styles';
import Card from '../card';
import { useSelector } from 'react-redux';
import { useEffect, useState } from 'react';
import axios from 'axios';
import { useTeams } from '../../redux/sliceTeams';
import Finals from '../../assets/logosNba/finals.png';


const Bracket = () => {
    const teams = useSelector(useTeams)
    const [allTeams, setAllTeams] = useState(teams)

    useEffect(() => {
        const getAllTeams = async () => {
            const response = await axios.get('http://localhost:8080/api/teams');
            setAllTeams(response.data);
        }
        getAllTeams()
    }, []);


    return (
        <S.brackContent>
            <S.bracket>
                <Card />
                <Card />
                <Card />
                <Card />
            </S.bracket>
            <S.bracket>
                <Card />
                <Card />
            </S.bracket>
            <S.bracket>
                <Card />
            </S.bracket>
            
            <S.final>
                <S.finals src={Finals}/>
                <Card />
            </S.final>
            <S.bracket >
                <Card />
            </S.bracket>
            <S.bracket>
                <Card />
                <Card />
            </S.bracket>
            <S.bracket>
                <Card />
                <Card />
                <Card />
                <Card />
            </S.bracket>

        </S.brackContent>

    )

}
export default Bracket;