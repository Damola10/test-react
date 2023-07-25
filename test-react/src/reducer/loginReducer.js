const loginReducer = (login, action) => {
  if (action.type === "CHANGE_EMAIL") {
    return { ...login, email: action.payload };
  } else if (action.type === "CHANGE_PASS") {
    return { ...login, password: action.payload };
  } else {
    return login;
  }
};

export default loginReducer;
