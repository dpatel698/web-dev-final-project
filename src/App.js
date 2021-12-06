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
import DetailsScreen from "./components/DetailsScreen";

const reducer = combineReducers({
    profile: profile,
})
const store = createStore(reducer);

function App() {
  return (
      <BrowserRouter>
          <Provider store={store}>
              <Route path="/movieRatings/home"  component={HomeScreen} exact={true}/>
              <Route path="/movieRatings/search/term" component={SearchScreen}/>
              <Route path="/movieRatings/search/:searchTerm" component={SearchScreen}/>
              <Route path="/movieRatings/profile" component={ProfileScreen}/>
              <Route path="/movieRatings/details/:id" component={DetailsScreen}/>

              <div className="App">
              </div>
          </Provider>
      </BrowserRouter>
  );
}

export default App;
