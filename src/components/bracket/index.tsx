import * as S from "./styles";
import Card from "../card";
import { useSelector } from "react-redux";
import { useEffect, useState } from "react";
import axios from "axios";
import { useTeams } from "../../redux/sliceTeams";
import Finals from "../../assets/logosNba/finals.png";

const Bracket = () => {
  const teams = useSelector(useTeams);
  const [allTeams, setAllTeams] = useState(teams);
  const [win, setWin] = useState(false);

  useEffect(() => {
    const getAllTeams = async () => {
      const response = await axios.get("http://localhost:8080/api/teams");
      setAllTeams(response.data);
    };
    getAllTeams();
  }, []);
  const eastConference = allTeams.filter((e) => e.conference == "east");
  const westConference = allTeams.filter((e) => e.conference == "west");

  const team1 = westConference.find((e) => e.name == "lakers");
  const team2 = westConference.find((e) => e.name == "nuggets");

  const team3 = westConference.find((e) => e.name == "warriors");
  const team4 = westConference.find((e) => e.name == "grizzlies");

  const team5 = westConference.find((e) => e.name == "kings");
  const team6 = westConference.find((e) => e.name == "thunder");

  const team7 = westConference.find((e) => e.name == "spurs");
  const team8 = westConference.find((e) => e.name == "mavericks");

  const team9 = eastConference.find((e) => e.name == "bucks");
  const team10 = eastConference.find((e) => e.name == "hawks");

  const team11 = eastConference.find((e) => e.name == "bulls");
  const team12 = eastConference.find((e) => e.name == "knicks");

  const team13 = eastConference.find((e) => e.name == "celtics");
  const team14 = eastConference.find((e) => e.name == "pistons");

  const team15 = eastConference.find((e) => e.name == "pacers");
  const team16 = eastConference.find((e) => e.name == "heat");

  return (
    <S.brackContent>
      <S.bracket>
        <Card team1={team1} team2={team2} />
        <Card team1={team3} team2={team4} />
        <Card team1={team5} team2={team6} />
        <Card team1={team7} team2={team8} />
      </S.bracket>
      <S.bracket>
        <Card team1={team1} team2={team3} />
        <Card team1={team6} team2={team8} />
      </S.bracket>
      <S.bracket>
        <Card team1={team1} team2={team8} />
      </S.bracket>

      <S.final>
        <S.finals src={Finals} />
        <Card team1={team1} team2={team13} />
      </S.final>
      <S.bracket>
        <Card team1={team10} team2={team13} />
      </S.bracket>
      <S.bracket>
        <Card team1={team10} team2={team11} />
        <Card team1={team13} team2={team16} />
      </S.bracket>
      <S.bracket>
        <Card team1={team9} team2={team10} />
        <Card team1={team11} team2={team12} />
        <Card team1={team13} team2={team14} />
        <Card team1={team15} team2={team16} />
      </S.bracket>
    </S.brackContent>
  );
};
export default Bracket;
