import { useEffect } from "react";
import { useShallow } from "zustand/shallow";
import { useTableStore } from "./store";

const TableCell = ({
  children,
  id,
  row,
  col,
}: {
  children: React.ReactNode;
  id: string;
  row: number;
  col: number;
}) => {
  const cellData = useTableStore(useShallow((store) => store.data[row][col]));
  const update = useTableStore((store) => store.setCellData);

  useEffect(() => console.log("effect", cellData), [cellData]);

  return (
    <div onClick={() => update(row, col, "updated")}>
      <div>{`x:${row},y:${col}`}</div>
      <div> {children}</div>
      <div>{cellData}</div>
    </div>
  );
};

export default TableCell;
