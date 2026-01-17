import { useCallback, useEffect, useState } from "react";

export default function ExtraFile() {
  let [count, setcount] = useState(0);

    let inc = useCallback(() => {
      setcount(count + 1);
    }, [count]);

  return (
    <div>
      <h2>hello : {count}</h2>
      <button onClick={inc}>inc</button>
    </div>
  );
}
