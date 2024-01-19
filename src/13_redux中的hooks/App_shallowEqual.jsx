import React, { memo } from "react";
import {  shallowEqual, useDispatch, useSelector } from "react-redux";
import { subNumberAction, addNumberAction, changeMessageAction} from "./store/modules/counter";

// useSelector 有两个参数， 参数1: 是state，用来做state的映射 参数2: 可以进行比较来决定是否组件重新渲染

// memo高阶组件包裹起来的特点： props改变时才会重新渲染
const Home = memo((props) => {
  // 但这时候修改App 的counter,Home会被重新渲染,不合理，只有message改变才会渲染Home合理
  // useSelector 监听整个state
  const { message} = useSelector((state)=> ({
    message: state.counter.message
  }), shallowEqual)

  // shallowEqual浅层比较
  const dispatch = useDispatch()

  function changeMessage  () {
    dispatch(changeMessageAction('你好 黑莓'))
  }
  console.log('home render')
  return (
    <div>
      <h2>Home: {message}</h2>
      <button onClick={e =>changeMessage()}>修改message</button>
    </div>
  )
})
const App = memo((props) => {

  // 1.使用useSelector 将redux中store中的数据映射到组件内
  const { count } = useSelector((state) => ({
    count: state.counter.count
  }),shallowEqual)

  // 2.使用dispatch直接派发action
  const dispatch = useDispatch()
  function addNumberHandle(num, isAdd = true) {
    if (isAdd) {
      dispatch(addNumberAction(num))
    } else {
      dispatch(subNumberAction(num))
    }
  }
  console.log('app render')
  return (
    <div>
      <h1>当前计数：{count}</h1>
      <button onClick={e=>addNumberHandle(1)}>+1</button>
      <button onClick={e=>addNumberHandle(2)}>+2</button>
      <button onClick={e=>addNumberHandle(3)}>+3</button>
      <button onClick={e=>addNumberHandle(4, false)}>-4</button>
      <Home></Home>
    </div>
  );
});

export default App
