import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { changeTheme } from "../../../shared/state/themeSlice";

const HomePage = () => {
  const dispatch = useDispatch();

  const theme = useSelector((state) => state.theme.theme);

  function changeThemeHandler() {
  
    dispatch(changeTheme());
  }

  return (
    <div>
      <h1>This is Home Page</h1>

      <p>Current Theme: {theme}</p>

      <button onClick={changeThemeHandler}>
        Change Theme
      </button>
    </div>
  );
};

export default HomePage;