import {Provider} from "react-redux";
import {combineReducers, createStore} from "redux";
import {BrowserRouter, Route, Routes} from "react-router-dom"; //Routes isn't working for some reason, the version is wrong
import React from "react";
import './vendors/bootstrap/css/bootstrap.min.css'
import './App.css';
import HomeScreen from "./components/HomeScreen";
import profile from "./reducers/data/profile";
import SearchScreen from "./components/SearchScreen";
import ProfileScreen from "./components/ProfileScreen";
import DetailsScreen from "./components/DetailsScreen";
import Login from "./components/Login/login";
import Register from "./components/Login/register";
import Profile from "./components/Login/profile";

const reducer = combineReducers({
    profile: profile,
})
const store = createStore(reducer);

function App() {
  return (
      <BrowserRouter>
          <Provider store={store}>
              <Routes>
                  <Route path="/"  element={<HomeScreen/>} exact={true}/>
                  <Route path="/movieRatings/search" element={<SearchScreen/>}/>
                  <Route path="/:searchTerm" element={<SearchScreen/>}/>
                  <Route path="/movieRatings/details/:id" element={<DetailsScreen/>}/>
                  <Route path="/movieRatings/login" element={<Login/>}/>
                  <Route path="/movieRatings/register" element={<Register/>}/>
                  <Route path="/movieRatings/profile" element={<Profile/>}/>
              </Routes>

              <div className="App">
              </div>
          </Provider>
      </BrowserRouter>
  );
}

export default App;
