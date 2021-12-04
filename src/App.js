import {Provider} from "react-redux";
import {combineReducers, createStore} from "redux";
import {BrowserRouter, Routes, Route} from "react-router-dom"; //Routes isn't working for some reason, the version is wrong
import React from "react";
import './vendors/bootstrap/css/bootstrap.min.css'
import './App.css';
import HomeScreen from "./components/HomeScreen";
import profile from "./reducers/data/profile";
import SearchScreen from "./components/SearchScreen";
import ProfileScreen from "./components/ProfileScreen";
import MovieDetails from "./components/MovieDetails";

const reducer = combineReducers({
    profile: profile,
})
const store = createStore(reducer);

function App() {
  return (
      <BrowserRouter>
          <Provider store={store}>
              <Route path="/movieRatings/home"  component={HomeScreen}/>
              <Route path="/movieRatings/search" component={SearchScreen}/>
              <Route path="/movieRatings/:searchTerm" component={SearchScreen}/>
              <Route path="/movieRatings/profile" component={ProfileScreen}/>
              <Route path="/movieRatings/details/:id" component={MovieDetails}/>

              <div className="App">
              </div>
          </Provider>
      </BrowserRouter>
  );
}

export default App;
