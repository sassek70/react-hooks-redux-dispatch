let state = { count: 0 };

function changeState(state, action) {
  switch (action.type) {
    case "counter/increment":
      return { count: state.count + 1 };
    default:
      return state;
  }
}

const dispatch = (action) => {
  state = changeState(state, action)
  render()
  // return state;
}


const render = () => {
  const app = document.querySelector("#app");
  app.textContent = state.count
}

// dispatch({ type: "counter/increment" })
// dispatch({ type: "counter/increment" })
// dispatch({ type: "counter/increment" })
// dispatch({ type: "counter/increment" })
// dispatch({ type: "counter/increment" })
// dispatch({ type: "counter/increment" })
// dispatch({ type: "counter/increment" })

