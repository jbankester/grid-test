import "./App.css";
import TableCell from "./TableCell";
import Grid from "./Grid";

const createHeaderCols = (numCols: number) => {
  const cols = [];

  while (cols.length < numCols) {
    cols.push(<th key={`th-${cols.length}`}>header {cols.length}</th>);
  }
  return cols;
};

const createTableCells = (numCols: number, rowNum: number) => {
  const cols = [];
  const id = crypto.randomUUID();
  while (cols.length < numCols) {
    cols.push(
      <td key={id}>
        <TableCell id={id}>
          <span>
            {rowNum} - {cols.length}
          </span>
        </TableCell>
      </td>,
    );
  }
  return cols;
};

const createTableRows = (numRows: number, numCols: number) => {
  const rows = [];
  while (rows.length < numRows) {
    rows.push(
      <tr key={`tr-${rows.length}`}>
        {createTableCells(numCols, rows.length)}
      </tr>,
    );
  }
  return rows;
};

function App() {
  return (
    <div className="table-container">
      <Grid
        headers={[
          { label: "1" },
          { label: "2" },
          { label: "3" },
          { label: "4" },
          { label: "5" },
          { label: "6" },
          { label: "7" },
          { label: "8" },
          { label: "9" },
          { label: "10" },
          { label: "11" },
          { label: "12" },
        ]}
        initialData={[
          [
            "1-one",
            "1-two",
            "1-three",
            "1-one",
            "1-two",
            "1-three",
            "1-one",
            "1-two",
            "1-three",
            "1-one",
            "1-two",
            "1-three",
          ],
          [
            "2-one",
            "2-two",
            "2-three",
            "2-one",
            "2-two",
            "2-three",
            "2-one",
            "2-two",
            "2-three",
            "2-one",
            "2-two",
            "2-three",
          ],
        ]}
      />
    </div>
  );
}

export default App;
/*<table>
        <thead>
          <tr>{createHeaderCols(30)}</tr>
        </thead>
        <tbody>{createTableRows(30, 30)}</tbody>
      </table>*/
