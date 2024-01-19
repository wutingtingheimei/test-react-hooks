import React, { memo, useState, useEffect } from "react";

const App = memo(() => {
  //組件更新或卸载之前回调这个函数
  const [counter, setCounter] = useState(0);
  useEffect(() => {
    document.title = counter;
    // 当前传入的回调函数会在组件渲染完成后，自动执行
    // 生命周期特性
    // 发送网络请求/监听时间/store.subscribe
  });

  return (
    <div>
      <h2>计数： {counter}</h2>
      <button onClick={(e) => setCounter(counter + 1)}>修改</button>
    </div>
  );
});

export default App;

// import React, { PureComponent } from "react";

// export class App extends PureComponent {
//   constructor() {
//     super();
//     this.state = {
//       counter: 0,
//     };
//   }
//   componentDidMount() {
//     document.title = this.state.counter
//   }
//   componentDidUpdate() {
//     document.title = this.state.counter;
//   }
//   render() {
//     const { counter } = this.state;
//     return (
//       <div>
//         <h2>计数： {counter}</h2>
//         <button onClick={(e) => this.setState({ counter: counter + 1 })}>
//           修改
//         </button>
//       </div>
//     );
//   }
// }

// export default App;
