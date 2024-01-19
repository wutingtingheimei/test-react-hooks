import React, { memo,useContext } from "react";
import { UserContext, ThemeContext } from "./context";

const App = memo(() => {
  const user = useContext(UserContext)
  const theme = useContext(ThemeContext)
  // 使用context
  return (
    <div>
      {/* 旧的写法 */}
      {/* <UserContext.Consumer>
        {(value) => {
          return (
            <h2>
              <ThemeContext.Consumer>{(value) => {}}</ThemeContext.Consumer>
            </h2>
          );
        }}
      </UserContext.Consumer> */}

      <h2>User: {user.name}</h2>
      <h2 style={{color: theme.color}}>Theme</h2>
    </div>
  );
});

export default App
