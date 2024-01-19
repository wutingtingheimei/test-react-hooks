import React, { memo } from "react";
import {  useDispatch, useSelector } from "react-redux";
import { subNumberAction, addNumberAction } from "./store/modules/counter";

const App = memo((props) => {

  // 1.使用useSelector 将redux中store中的数据映射到组件内
  const { count } = useSelector((state) => ({
    count: state.counter.count
  }))

  // 2.使用dispatch直接派发action
  const dispatch = useDispatch()
  function addNumberHandle(num, isAdd = true) {
    if (isAdd) {
      dispatch(addNumberAction(num))
    } else {
      dispatch(subNumberAction(num))
    }
  }
  return (
    <div>
      <h1>当前计数：{count}</h1>
      <button onClick={e=>addNumberHandle(1)}>+1</button>
      <button onClick={e=>addNumberHandle(2)}>+2</button>
      <button onClick={e=>addNumberHandle(3)}>+3</button>
      <button onClick={e=>addNumberHandle(4, false)}>-4</button>
    </div>
  );
});

export default App
