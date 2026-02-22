import { useRef, useEffect } from "react";
import useOnScreen from "./useOnScreen";

const VisibilityObserverCell = ({
  children,
  id,
}: {
  children: React.ReactNode;
}) => {
  const elRef = useRef(null);
  const isVisible = useOnScreen(elRef);
  console.log("obsvid", id);
  return <td ref={elRef}>{isVisible && children}</td>;
};

export default VisibilityObserverCell;
