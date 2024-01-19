import React, { memo, useEffect, useState } from "react";

const App = memo(() => {
  const [counter, setCounter] = useState(0);
  const [message, setMessage] = useState(0);
  // 可以有多个useEffect
  // 修改标题
  // []不受任何影响， [counter] 受counter影响
  useEffect(() => {
    console.log("1");
  }, [counter]);
  // 监听数据
  useEffect(() => {
    console.log("2");
  }, []);
  // eventbus
  useEffect(() => {
    console.log("3");
  }, []);
  return (
    <div>
      {counter}
      {message}
      <button onClick={(e) => setMessage('测试')}>修改</button>
      <button onClick={(e) => setCounter(counter + 1)}>计数</button>
    </div>
  );
});

export default App;
