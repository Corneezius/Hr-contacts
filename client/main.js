import React from "react";
import ReactDOM from "react-dom";

import List from "./components/list";

const App = () => {
  return (
    <div>
      <List />
    </div>
  );
};


Meteor.startup(() => {
  ReactDOM.render(<App />, document.querySelector(".container"));
});
