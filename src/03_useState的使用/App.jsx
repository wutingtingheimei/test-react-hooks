import React, { memo, useState } from "react";

// 函数退出后变量会消失 而state中的变量被react保留了
const App = memo(() => {
  function changeMessage() {
    setMessage("你好，麦克");
  }
  const [message, setMessage] = useState("Hello world");
  return (
    <div>
      <h2>App : {message}</h2>
      <button onClick={(e) => changeMessage()}>修改文本</button>
    </div>
  );
});




export default App;
