import { ToastContainer } from "react-toastify";
import AppRoutes from "./routes/AppRoutes";
import React from "react";
import { Provider} from "react-redux";
import { store } from "./store/Store";
function App() {
  return (
    <>
    <Provider store ={store}>
      <AppRoutes/>

    </Provider>

      <ToastContainer
        position="bottom-right"
        autoClose={2000}
        theme="dark"
      />
    </>
  );
}

export default App;