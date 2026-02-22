import VisibilityObserverCell from "./VisibilityObserverCell";
import TableCell from "./TableCell";
import { useTableStore } from "./store";

export type GridOptions = {
  defaultColWidth: string;
};

export type GridColHeader = {
  label: string;
};

export type GridCell = {
  label: string;
};

export interface GridProps {
  headers: Array<GridColHeader>;
  initialData: Array<Array<GridCell>>;
  options?: GridOptions;
}

const createHeaderCells = (headers: Array<GridColHeader>) => {
  return headers.map((h) => <th>{h.label}</th>);
};

const createGridRows = (data: Array<Array<GridCell>>) => {
  return data.map((r, rowIdx) => (
    <tr>
      {r.map((c, colIdx) => (
        <VisibilityObserverCell
          key={`observer-${rowIdx}-${colIdx}`}
          id={`observer-${rowIdx}-${colIdx}`}
        >
          <TableCell id="" row={rowIdx} col={colIdx}>
            tc
          </TableCell>
        </VisibilityObserverCell>
      ))}
    </tr>
  ));
};

const Grid = ({ headers, initialData, options }: GridProps) => {
  //create store with initial data then never use it again
  //const { data } = useTableStore((store) => store.data);
  return (
    <table>
      <thead>
        <tr>{createHeaderCells(headers)}</tr>
      </thead>
      <tbody>{createGridRows(initialData)}</tbody>
    </table>
  );
};

export default Grid;
