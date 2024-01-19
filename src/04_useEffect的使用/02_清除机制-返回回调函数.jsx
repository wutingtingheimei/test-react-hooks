import React, { memo, useEffect, useState } from 'react'

const App = memo(() => {
  const [counter, setCounter]  = useState(0)
  // 负责告知react，在执行完当前组件渲染之后要执行的副作用代码
  useEffect(() => {
    // 1.监听事件
    console.log('监听')

    // 返回值：回调函数=>组件被重新渲染或组件卸载的时候执行
    return ()=> {
      console.log('取消监听')

    }

  })
  return (
    <div>
      <button onClick={e => setCounter(counter  + 1)}>计数</button>
    </div>
  )
})

export default App