import React, { memo } from "react";
import useUserToken from "./hooks/useUserToken";
// import { UserContext, TokenContext } from "./context";
const Home = memo(() => {
  const [user, token] = useUserToken();
  return (
    <h1>
      Home Page :User: {user.color} - Token: {token}
    </h1>
  );
});
const About = memo(() => {
  return <h1>About Page</h1>;
});
// 自定义hook 相当于代码的抽取
const App = memo(() => {
  // 组件创建和销毁打印
  return (
    <div>
      <h2>自定义hook</h2>
      <Home></Home>
      <About></About>
    </div>
  );
});

export default App;
