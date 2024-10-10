import { Table } from "@mui/material/";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import * as S from "./styles";

function createData(id: number, name: string, points: number) {
  return { id, name, points };
}

const rows = [
  createData(1, "Weverton", 10),
  createData(2, "Matheus", 9),
  createData(3, "Helio", 7),
  createData(3, "Helio", 7),
  createData(3, "Helio", 7),
  createData(3, "Helio", 7),
  createData(3, "Helio", 7),
  createData(3, "Helio", 7),
  createData(3, "Helio", 7),
  createData(3, "Helio", 7),
  createData(3, "Helio", 7),
  createData(3, "Helio", 7),
];

const Tables = () => {
  return (
    <S.tabContainer>
      <TableContainer>
        <Table sx={{ minWidth: 650 }} aria-label="simple table">
          <TableHead>
            {" "}
            Ranking NBA
            <TableRow>
              <TableCell>Ranking</TableCell>
              <TableCell align="right">Nome</TableCell>
              <TableCell align="right">Pontos</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {rows.map((row) => (
              <TableRow
                key={row.id}
                sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
              >
                <TableCell component="th" scope="row">
                  {row.id}
                </TableCell>
                <TableCell align="right">{row.name}</TableCell>
                <TableCell align="right">{row.points}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </S.tabContainer>
  );
};
export default Tables;
