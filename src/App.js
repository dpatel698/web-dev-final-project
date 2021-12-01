import {Provider} from "react-redux";
import {combineReducers, createStore} from "redux";
import {BrowserRouter, Routes, Route} from "react-router-dom"; //Routes isn't working for some reason, the version is wrong
//import {Routes, Route} from "react-router";
import React from "react";
import './vendors/bootstrap/css/bootstrap.min.css'
import './App.css';
import HomeScreen from "./components/HomeScreen";
import profile from "./reducers/data/profile";
import SearchMovies from "./components/SearchMovies";
import ProfileScreen from "./components/ProfileScreen";

const reducer = combineReducers({
    profile: profile,
})
const store = createStore(reducer);

function App() {
  return (
      <BrowserRouter>
          <Provider store={store}>
              <Routes>
                  <Route exact path="/movieRatings/home"  component={HomeScreen}/>
                  <Route path="/movieRatings/search" component={SearchMovies}/>
                  <Route path="/movieRatings/profile" component={ProfileScreen}/>
              </Routes>
                <div className="App">
                    <ProfileScreen/>
                </div>
          </Provider>
      </BrowserRouter>
  );
}

export default App;
