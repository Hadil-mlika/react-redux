const initialState = {
  x: 70,
};

const reducer = (state = initialState, action) => {
  if (action.type == "INCREMENT") {
    return { x: state.x + 1 };
  } else if (action.type == "DECREMENT") {
    return { x: state.x - 1 };
  } else {
    return state;
  }
};

export default reducer;
