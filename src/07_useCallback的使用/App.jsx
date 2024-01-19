import React, { memo, useCallback,useRef,   useState } from "react";

// memo 允许你的组件在 props 没有改变的情况下跳过重新渲染。
const HYHome =  memo((props)=> {
  console.log('HYHome')
  const {increment} =  props
  return (
    <div>
      <button onClick={e => increment()}>修改message HYHome</button>
      {/* 100个子组件 */}
    </div>
  )
})
const App = memo(() => {
  const [counter, setCounter] = useState(1);
  const [message, setMessage] = useState("Hello");

  // const increment = e=> {setCounter(counter + 1)}
  // 当一个函数需要给多个组件使用，我们可以使用useCallback进行性能优化，只有当特定值发生改变时，方法才会重新执行
  // 闭包陷阱
  // const increment = useCallback(
  //   // 回调函数
  //   function increment() {
  //     setCounter(counter + 1);
  //     console.log("渲染");
  //   },
  //   // 依赖值
  //   [counter]
  // );
  // 进一步优化： counter 改变时也使用同一个函数 
  // 方法1： 将counter直接移除：缺点： 闭包陷阱， increment只会加1 ，之后不会改变
  // 方法2： useRef,在组件多次渲染后，返回的是同一个值
  const counterRef = useRef()
  counterRef.current = counter
  const increment = useCallback(
    // 回调函数
    function increment() {
      setCounter(counterRef.current + 1);
      console.log("渲染");
    },
    // 依赖值
    []
  );
  // 每次渲染都会被定义一次

  return (
    <div>
      <h2>当前计数; {counter}</h2>
      消息： {message}
      <button onClick={increment}>+ 1</button>
      <button onClick={(e) => setMessage(Math.random())}>修改message</button>
      <HYHome increment={increment}></HYHome>
    </div>
  );
});

export default App;
