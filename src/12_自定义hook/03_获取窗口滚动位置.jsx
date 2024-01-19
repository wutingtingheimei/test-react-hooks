import React, { memo } from "react";
import "./style.css";
import useScrollPosition from "./hooks/useScrollPosition";
const Home = memo(() => {
  const [scrollX, scrollY] = useScrollPosition();
  return (
    <h1>
      Home Page: X : {scrollX} - Y: {scrollY}
    </h1>
  );
});
const About = memo(() => {
  const [scrollX, scrollY] = useScrollPosition();
  return <h1>About Page: X : {scrollX} - Y: {scrollY}</h1>;
});
// 自定义hook 相当于代码的抽取
const App = memo(() => {
  // 组件创建和销毁打印
  return (
    <div className="app">
      <h2>自定义hook</h2>
      <Home></Home>
      <About></About>
    </div>
  );
});

export default App;
