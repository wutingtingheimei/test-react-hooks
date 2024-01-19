import React, { memo, useEffect, useState } from "react";

//自定义hook 必须以use开头
function useLogLife (cname) {
  useEffect(() => {
    console.log(cname+ "组件被创建");
    return () => {
      console.log(cname+ '组件被销毁')
    }
  }, [cname])
}
const Home = memo(() => {
  useLogLife('home')
  return <h1>Home Page</h1>;
});
const About = memo(() => {
  useLogLife('about')
  return <h1>About Page</h1>;
});
// 自定义hook 相当于代码的抽取
const App = memo(() => {


  const [isShow , setIsShow] = useState(true)
  useLogLife('app')
  // 组件创建和销毁打印
  return (
    <div>
      <h2>自定义hook</h2>
      {
        isShow &&  <Home></Home>
      }
      {
        isShow && <About></About>
      }
      <button onClick={e=>setIsShow(!isShow)}>切换</button>
    </div>
  );
});

export default App;
