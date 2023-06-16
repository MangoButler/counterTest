
import { configureStore } from '@reduxjs/toolkit';
import counterReducer from './counter';
import authReducer from './auth';


const store = configureStore({
    //  reducer : counterSlice.reducer
    reducer:
     {
        counter: counterReducer,
        auth: authReducer,
    }
});






export default store;

///never!!! update the existing state, always override it, return a new state object, never change anything

// const counterReducer = (state = initialState, action) => {
    //   if (action.type === "increment") {
    //     return {
    //       ...state,  
    //       counter: state.counter + 1,
    //     };
    //   }
    //   if(action.type === 'increase'){
    //     return {
    //         counter: state.counter + action.amount,
    //         showCounter: state.showCounter
    //     };
    //   }
    //   if (action.type === "decrement") {
    //     return {
    //       counter: state.counter - 1,
    //       showCounter: state.showCounter
    //     };
    //   }
    //   if(action.type === 'decrease'){
    //     return {
    //         counter: state.counter - action.amount,
    //         showCounter: state.showCounter
    //     };
    //   }
    
    //   if(action.type === 'toggle'){
    //     return {
    //         counter: state.counter,
    //         showCounter: !state.showCounter
    //     }
    //   }
    //   return state;
    // };
    
    // const store = createStore(counterReducer);

    // export default store;
