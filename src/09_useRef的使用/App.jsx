import React, { memo, useCallback, useRef, useState } from "react";

//useRef 返回一个ref对象，返回的ref对象在组件的整个生命周期保持不不变

let obj = null
const App = memo(() => {
  // useEffect(()=> {
  //   document.querySelector(".title")
  // })
  // 用法：
// 1.绑定dom
  const titleRef = useRef();
  const inputRef = useRef()
  function showTitleDom() {
    console.log(titleRef.current);
    inputRef.current.focus()
  }
const [counter, setCounter] = useState(0)

const counterRef = useRef()
counterRef.current = counter
const increment = useCallback(() => {
  setCounter(counterRef.current + 1)
}, [])
// 可以解决我们的闭包陷阱
  const nameRef =useRef()
  console.log(obj === nameRef, '是否同一个对象')
  obj = nameRef
  return (
    <div>
      <h2 ref={titleRef}>Hell World</h2>
      <input type="text" ref={inputRef}></input>
      <button onClick={(e) => showTitleDom()}>查看title 的 dom</button>
      <div>counter: {counter}</div>
      <button onClick={e => setCounter(counter + 1)}>+1</button>
      <button onClick={e =>increment()}>increment</button>
    </div>
  );
});

export default App;
