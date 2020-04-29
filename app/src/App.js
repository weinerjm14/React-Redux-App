import React from "react";

import "./App.css";
import Character from "./components/Character";
import { connect } from "react-redux";

const App = props => {
  return (
    <div className="App">
      <Character />
    </div>
  );
};
const mapStateToProps = state => {
  return {
    characters: state.characters,
    error: state.error,
    isFetching: state.isFetching,
  };
};

export default connect(mapStateToProps, {})(App);
