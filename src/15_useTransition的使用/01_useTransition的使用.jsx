import React, { memo, useState, useTransition } from "react";
import nameArray from "./nameArray";

const App = memo(() => {
  const [showNames, setShownames] = useState(nameArray);
  // useTransition: 在不阻塞 UI 的情况下更新状态的 React Hook
  const [pending, startTransition] = useTransition();

  function valueChangeHandle(e) {
    startTransition(() => {
      const keyword = e.target.value;
      const filterNames = nameArray.filter((item) => item.includes(keyword));
      setShownames(filterNames);
    });
  }

  return (
    <div>
      <input type="text" onInput={valueChangeHandle}></input>
      <h2>用户列表{pending && <span>loading</span>}</h2>
      <ul>
        {showNames.map((item, index) => {
          return <li key={index}>{item}</li>;
        })}
      </ul>
    </div>
  );
});

export default App;
