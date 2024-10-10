import * as S from "./styles";
import Card from "../card";
import { useSelector } from "react-redux";
import { useEffect, useState } from "react";
import axios from "axios";
import { useTeams } from "../../redux/sliceTeams";
import Finals from "../../assets/logosNba/finals.png";

interface Team {
  name: string;
  logo: string;
  titlesCount: number;
  active: boolean;
  conference: string;
}

const Bracket = () => {
  const teams = useSelector(useTeams);
  const [allTeams, setAllTeams] = useState(teams);
  const [oitavas, setOitavas] = useState<Team[] | null>([]);
  const [semi, setSemi] = useState<Team[] | null>([]);
  const [finalC, setFinalC] = useState<Team[] | null>([]);
  const [final, setFinal] = useState<Team[] | null>([]);

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

  const goNext = (
    team: Team,
    position: number,
    conference: string,
    fase: string
  ) => {
    if (!team.name) {
      return;
    }

    if (fase == "oitavas") {
      const vaiPro = oitavas;
      vaiPro[position] = team;
      setOitavas([...vaiPro]);
      setSemi([]);
    }
    if (fase == "semi") {
      const vaiPro = semi;
      vaiPro[position] = team;
      setSemi([...vaiPro]);
      setFinalC([]);
    }
    if (fase == "finalC") {
      const vaiPro = finalC;
      vaiPro[position] = team;
      setFinalC([...vaiPro]);
    }
    if (fase == "final") {
      const vaiPro = final;
      vaiPro[position] = team;
      setFinal([...vaiPro]);
    }
  };

  return (
    <S.brackContent>
      <S.bracket>
        <Card
          team1={team1}
          team2={team2}
          handleClickTeam={(team) => goNext(team, 0, "oeste", "oitavas")}
        />
        <Card
          team1={team3}
          team2={team4}
          handleClickTeam={(team) => goNext(team, 1, "", "oitavas")}
        />
        <Card
          team1={team5}
          team2={team6}
          handleClickTeam={(team) => goNext(team, 2, "", "oitavas")}
        />
        <Card
          team1={team7}
          team2={team8}
          handleClickTeam={(team) => goNext(team, 3, "", "oitavas")}
        />
      </S.bracket>
      <S.bracket>
        <Card
          team1={oitavas[0]}
          team2={oitavas[1]}
          handleClickTeam={(team) => goNext(team, 0, "", "semi")}
        />
        <Card
          team1={oitavas[2]}
          team2={oitavas[3]}
          handleClickTeam={(team) => goNext(team, 1, "", "semi")}
        />
      </S.bracket>
      <S.bracket>
        <Card
          team1={semi[0]}
          team2={semi[1]}
          handleClickTeam={(team) => goNext(team, 0, "", "finalC")}
        />
      </S.bracket>

      <S.final>
        <S.finals src={Finals} />
        <Card
          team1={finalC[0]}
          team2={finalC[1]}
          handleClickTeam={(team) => goNext(team, 0, "", "final")}
        />
      </S.final>
      <S.bracket>
        <Card
          team1={semi[2]}
          team2={semi[3]}
          handleClickTeam={(team) => goNext(team, 1, "", "finalC")}
        />
      </S.bracket>
      <S.bracket>
        <Card
          team1={oitavas[4]}
          team2={oitavas[5]}
          handleClickTeam={(team) => goNext(team, 2, "", "semi")}
        />
        <Card
          team1={oitavas[6]}
          team2={oitavas[7]}
          handleClickTeam={(team) => goNext(team, 3, "", "semi")}
        />
      </S.bracket>
      <S.bracket>
        <Card
          team1={team9}
          team2={team10}
          handleClickTeam={(team) => goNext(team, 4, "", "oitavas")}
        />
        <Card
          team1={team11}
          team2={team12}
          handleClickTeam={(team) => goNext(team, 5, "", "oitavas")}
        />
        <Card
          team1={team13}
          team2={team14}
          handleClickTeam={(team) => goNext(team, 6, "", "oitavas")}
        />
        <Card
          team1={team15}
          team2={team16}
          handleClickTeam={(team) => goNext(team, 7, "", "oitavas")}
        />
      </S.bracket>
    </S.brackContent>
  );
};
export default Bracket;
