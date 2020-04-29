import React, { useEffect } from "react";

import { getSwInfo } from "../actions/Actions";
import { connect } from "react-redux";

const Character = props => {
  useEffect(() => {
    props.getSwInfo();
  }, []);
  console.log("charter", props.characters.results);
  const info = props.characters.results;
  console.log("info", info);
  return (
    <div>
      {props.isFetching ? (
        <h2>Jumping to HyperSpace!</h2>
      ) : (
        <div>
          {info
            ? info.map(item => (
                <section className="sw-container">
                  <h2>Name: {item.name}.</h2>
                  <p>Height: {item.height}</p>
                  <p>Mass: {item.mass}</p>
                </section>
              ))
            : "waiting..."}
        </div>
      )}
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
export default connect(mapStateToProps, { getSwInfo })(Character);
