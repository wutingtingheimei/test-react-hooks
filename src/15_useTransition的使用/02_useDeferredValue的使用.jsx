import React, { memo, useDeferredValue, useState } from "react";
import nameArray from "./nameArray";

const App = memo(() => {
  const [showNames, setShownames] = useState(nameArray);

  // 延迟数组
  const deferedShowNames = useDeferredValue(showNames)
  function valueChangeHandle(e) {
    const keyword = e.target.value;
    const filterNames = nameArray.filter((item) => item.includes(keyword));
    setShownames(filterNames);
  }

  return (
    <div>
      <input type="text" onInput={valueChangeHandle}></input>
      <h2>用户列表</h2>
      <ul>
        {deferedShowNames.map((item, index) => {
          return <li key={index}>{item}</li>;
        })}
      </ul>
    </div>
  );
});

export default App;
