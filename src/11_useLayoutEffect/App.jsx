import React, { memo, useEffect, useState } from 'react'

const App = memo(() => {
  const [count, setCount]  = useState(100)
  // 了解即可
  // 可以解决切换闪烁现象
  // useLayoutEffect(()=> {
  //   console.log('DOM更新之前')
  //   if(count === 0) {
  //     setCount(Math.random() + 99)
  //   }
  // })
  useEffect(()=> {
    console.log('DOM更新')
    if(count === 0) {
      setCount(Math.random() + 99)
    }
  }, [count])
 
  return (
    <div>
      <h1>count: {count}</h1>
      <button onClick={e => setCount(0)}>设置为0</button>
    </div>
  )
})


// useEffect 会在渲染的内容更新到DOM上后执行， 不会阻塞DOM的更新
// useLayoutEffect 会在渲染的内容更新到DOM上之前执行，会阻塞DOM的更新
export default App