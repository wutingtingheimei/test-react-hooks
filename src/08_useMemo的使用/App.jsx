import React, { memo,  useMemo, useState } from "react";

const calcNumber = (num) => {
  console.log("calcNumber渲染");
  let total = 0;
  for (let i = 0; i < num; i++) {
    total += i;
  }
  return total;
};

const HelloWord = memo(() => {
  console.log('hell word')
  return <div>Hello Word</div>;
})
// let total = calcNumber(50)
const App = memo(() => {
  const [counter, setCounter] = useState(0);
  // 1.不依赖任何的值，进行计算
  let total = calcNumber(50)
  // let total = useMemo(() => {
  //   return calcNumber(50);
  // }, []);

  // 2.依赖counter
  // let total = useMemo(() => {
  //   return calcNumber(counter * 2);
  // }, [counter]);

  // function fn () {}
  //3. useCallback和useMemo 比较
  // 返回有记忆的函数
  // const result = useCallback(fn, []);
  // 返回有记忆的值  对函数的返回值做优化
  // const result = useMemo(() => fn, []);


  // 4.使用useMemo对子组件渲染进行优化
  const info = useMemo(()=> ({ age: 18, name: 'why'}), [])

  // const info = {age: 18, name: 'why'}
  return (
    <div>
      <h2>计数： {counter} </h2>
      <button onClick={(e) => setCounter(counter + 1)}>+ 1</button>
      {/* <h2>计算结果： {calcNumber(50)}</h2> */}
      <h2>{total}</h2>
      <HelloWord  info={info}/>
      {/* <HelloWord  total={total}></HelloWord> */}
    </div>
  );
});

export default App;
