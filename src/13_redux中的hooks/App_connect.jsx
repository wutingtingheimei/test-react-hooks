import React, { memo } from "react";
import { connect } from "react-redux";
import { subNumberAction, addNumberAction } from "./store/modules/counter";

const App = memo((props) => {
  const { addNumber, count, subNumber } = props;

  function addNumberHandle(num, isAdd = true) {
    if (isAdd) {
      addNumber(num);
    } else {
      subNumber(num);
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

const mapStateToProps = (state) => ({
  count: state.counter.count,
});

const mapDispatchToProps = (dispatch) => ({
  addNumber(num) {
    dispatch(addNumberAction(num));
  },
  subNumber(num) {
    console.log('num', num)
    dispatch(subNumberAction(num));
  },
});
export default connect(mapStateToProps, mapDispatchToProps)(App);
