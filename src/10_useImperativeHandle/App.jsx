import React, { memo, useRef, forwardRef, useImperativeHandle } from "react";

//允许你的组件使用 ref 将一个 DOM 节点暴露给父组件。
const Hello = memo(
  forwardRef((props, ref) => {
    // 子组件对父组件传入的ref进行处理
    const inputRef = useRef()
    useImperativeHandle(ref, () => {
      // 暴露一些方法
      return {
        focus() {
          console.log("焦点");
          inputRef.current.focus()
        },
        setValue (value) {
          inputRef.current.value = value

        }
      };
    });
    return <input type="text" ref={inputRef}></input>;
  })
);
const App = memo(() => {
  const titleRef = useRef();
  const inputRef = useRef();
  function handleDOM() {
    inputRef.current.focus();
    inputRef.current.setValue('学而思')
    console.log(titleRef.current);
  }
  return (
    <div>
      <h1 ref={titleRef}>哈哈哈哈哈哈哈哈哈哈哈哈</h1>
      <button onClick={handleDOM}>DOM操作</button>
      <Hello ref={inputRef}></Hello>
    </div>
  );
});

export default App;
