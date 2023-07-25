import { useState, useReducer } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import formReducer from "./reducer/formReducer";
import loginReducer from "./reducer/loginReducer";

const initialState = {
  firstName: "",
  lastName: "",
  email: "",
  password: "",
};

function Username() {
  const [state, dispatch] = useReducer(formReducer, initialState);
  const [showDetails, setShowDetails] = useState(1);

  function changeFirstName(e) {
    dispatch({ type: "CHANGE_FIRST", payload: e.target.value });
  }

  function changelastName(e) {
    dispatch({ type: "CHANGE_LAST", payload: e.target.value });
  }

  return (
    <div className="App">
      <form>
        <div>
          <label>First Name</label>
          <input onInput={changeFirstName} value={state.firstName} />
        </div>
        <div>
          <label>Last Name</label>
          <input onInput={changelastName} value={state.lastName} />
        </div>
        <button onClick={Details}>Next</button>
      </form>
    </div>
  );
}

function Login() {
  const [login, loginInput] = useReducer(loginReducer, initialState);
  function changeEmail(e) {
    loginInput({ type: "CHANGE_EMAIL", payload: e.target.value });
  }
  function changePassword(e) {
    loginInput({ type: "CHANGE_PASS", payload: e.target.value });
  }

  return (
    <div className="">
      <form>
        <div>
          <label>Email</label>
          <input onInput={changeEmail} value={login.email} />
        </div>
        <div>
          <label>Password</label>
          <input onInput={changePassword} value={login.password} />
        </div>
      </form>
      <button onClick={Details}>Submit</button>
    </div>
  );
}

function Details() {
  setShowDetails((showDetails) => showDetails + 1);
}
/* <div>
  <p>firstName: {state.firstName}</p>
  <p>lastName: {state.lastName}</p>
  <p>email: {login.email}</p>
  <p>password: {login.password}</p>
</div>; */

function App() {
  return (
    // <div>
    //   {state.firstName === "" && <Username state={state} dispatch={dispatch} />}
    //   {state.firstName !== "" && login.email === "" && (
    //     <Login login={Login} loginInput={loginInput} />
    //   )}
    //   {login.email !== "" && (

    //   )}
    //   ;
    // </div>
    <div>
      <Username />
      <Login />
    </div>
  );
}

export default App;
