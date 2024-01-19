// import React, { memo, useId, useState } from 'react'

// // useId
// const App = memo(() => {
//   const [count, setCount] = useState(0)

//   const id = useId()
//   console.log(id)
//   return (
//     <div>
//       <h1>App:  {id}</h1>
//       <button onClick={e => setCount(count + 1)}>count + 1 {count}</button>
//       <label htmlFor='username'>
//         用户名： <input type="text" id='username'/>
//       </label>
//     </div>
//   )
// })

// export default App

import React, { Component, useState } from "react";
const App = () => {
  const [count, setCount] = useState(0);
  return (
    <div>
      <h2>App: count: {count}</h2>
      <HelloWorld></HelloWorld>
      <button onClick={(e) => setCount(count + 1)}> +1 </button>
    </div>
  );
};

class HelloWorld extends Component {
  render() {
    console.log("子组件渲染");
    return <div>HelloWorld</div>;
  }
}

export default App