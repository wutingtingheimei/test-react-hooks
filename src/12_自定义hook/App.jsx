// import React, { memo } from "react";
// import useLocalStorage from "./hooks/useLocalStorage";

// // 自定义hook 相当于代码的抽取
// const App = memo(() => {
//   const [token, setToken] = useLocalStorage('token')
//   const [avatar, setAvatar] = useLocalStorage('avatar')

//   const handleToken= () => {
//     setToken('tokenNew-134425353dfdf345555')
//   }
//   const handleSetAvatar= () => {
//     setAvatar('https://ba2222idu.com')
//   }
//   // 组件创建和销毁打印
//   return (
//     <div className="app">
//       <h2>自定义hook</h2>
//       <div>token： {token}</div>
//       <div>头像：{avatar}</div>
//       <button onClick={handleToken}>设置Token</button>
//       <button onClick={handleSetAvatar}>设备头像</button>

//     </div>
//   );
// });

// export default App;

import React, { memo, useState } from "react";
import "./style.css";
import useScrollPosition from "./hooks/useScrollPosition";
const Home = memo(() => {
  return <div>
    <div style={{height: '100vh'}}></div>
  </div>
});
const About = memo(() => {
  console.log("about");
  // const [scrollX, scrollY] = useScrollPosition();
  return <h1>About Page: X :</h1>;
});
// 自定义hook 相当于代码的抽取
const App = memo(() => {
  const [count, setCount] = useState(0);
  const [scrollX, scrollY] = useScrollPosition();
  return (
    <div>
      Home Page: X : {scrollX} - Y: {scrollY}
      {count}
      <button onClick={(e) => setCount(count + 1)}>+ 1</button>
      <About></About>
      <Home></Home>
    </div>
  );
  // 组件创建和销毁打印
  // return (
  //   <div className="app">
  //     <h2>自定义hook</h2>
  //     <Home></Home>
  //     <About></About>
  //   </div>
  // );
});

export default App;
