import React, { PureComponent } from 'react'


 class Hello extends PureComponent {
  constructor () {
    super()
    this.state = {
      message: 'Hello Word'
    }
  }
  render() {
    const {message} = this.state
    return (
      <div>
        <h2>内容：</h2>
        {message}
        <button onClick={e =>this.setState({message: '修改之后的内容'})}>修改内容</button>
      </div>
    )
  }
}
export class App extends PureComponent {
  render() {

    return (
      <div>
       App
       <Hello></Hello>
       <HelloWorld></HelloWorld>
     
      </div>
    )
  }
}

export default App


// Hooks  适用于函数式组件
// 函数式组件存在的缺陷：
// 1.修改message，组件不知道要重新渲染
// 2.如果页面重新渲染：函数会被重新执行，第二次重新执行时，会给message重新赋值为helloworld
// 3.类似于生命周期的回调函数：也是没有的
function HelloWorld () {
  let message = 'Hello Word'
  return (
    <div>
      <h2>内容：</h2>
      <button onClick={e =>message = '修改之后的内容'}>修改内容</button>
      {message}
    </div>
  )
}



