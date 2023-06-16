import classes from './Counter.module.css';
import { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { counterActions } from '../store/counter';
// import { Component } from 'react'
const Counter = () => {

  const [changeVal, setChangeVal] = useState(0);

  const dispatch = useDispatch();
  const counter = useSelector(state => state.counter.counter);
  const toggle = useSelector(state => state.counter.showCounter);  
  
  const incrementHandler = () =>{
    dispatch(counterActions.increment());
  };
  const increaseHandler = (value) =>{
    dispatch(counterActions.increase(value)); // { type: SOMEUNIQUEID, payload: the value passed}
  };
  const decrementHandler = () => {
    dispatch(counterActions.decrement());
  };
  const decreaseHandler = (value) => {
    dispatch(counterActions.decrease(value));
  };

  const valueChangeHandler = (event) =>{
    setChangeVal(event.target.value);
  };

  const toggleCounterHandler = () => {
    dispatch(counterActions.toggleCounter())
  };
  return (
    <main className={classes.counter}>
      <h1>Redux Counter</h1>
     {toggle &&  <div className={classes.value}>{ counter }</div>}
      <div className={classes.buttonBlock}>
        <button onClick={incrementHandler}>Increment</button>
        <button onClick={increaseHandler.bind(null, +changeVal)}>Increment by {changeVal}</button>
        <button onClick={decrementHandler}>Decrement</button>
        <button onClick={decreaseHandler.bind(null, +changeVal)}>Decrement by {changeVal}</button>
      </div>
      <button onClick={toggleCounterHandler}>Toggle Counter</button>
      <input type='number' placeholder='Set Value' onChange={valueChangeHandler}/>
    </main>
  );
};

export default Counter;
// class Counter extends Component {
//   incrementHandler(){
//     this.props.increment();
//   }

//   decrementHandler(){
//     this.props.decrement();
//   }

//   toggleCounterHandler(){}

//   render() {
//     return (
//       <main className={classes.counter}>
//         <h1>Redux Counter</h1>
//         <div className={classes.value}>{ this.props.counter }</div>
//         <div>
//           <button onClick={this.incrementHandler.bind(this)}>Increment</button>
//           <button onClick={this.decrementHandler.bind(this)}>Decrement</button>
//         </div>
//         <button onClick={this.toggleCounterHandler}>Toggle Counter</button>
//       </main>
//     );
//   };
// }

// const mapStateToProps = state => {
//   return {
//     counter: state.counter
//   };
// }

// const mapDispatchToProps = dispatch => {
//   return {
//     increment: () => dispatch({type: 'increment'}),
//     decrement: () => dispatch({type: 'decrement'})
//   };
// };

// export default connect(mapStateToProps, mapDispatchToProps)(Counter);
