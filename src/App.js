import {Provider} from "react-redux";
import {combineReducers, createStore} from "redux";
import {BrowserRouter, Route, Routes } from "react-router-dom";
import React from "react";
import './vendors/bootstrap/css/bootstrap.min.css'
//import "bootswatch/dist/united/bootstrap.min.css";
import './App.css';
import HomeScreen from "./components/HomeScreen";
import profile from "./reducers/data/profile";

const reducer = combineReducers({
    profile: profile,
})
const store = createStore(reducer);

function App() {
  return (
      <BrowserRouter>
          <Provider store={store}>
            <div className="App">
                <Routes>
                    <Route path="/movieRater/home" component={HomeScreen}/>
                </Routes>
                <HomeScreen/>
            </div>
          </Provider>
      </BrowserRouter>
  );
}

export default App;
