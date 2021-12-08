import "./App.css";
import React from "react";
import ResponsiveDialog from "./common/dialog";

const App = () => {
  return <ResponsiveDialog visible={true} Page={Test} />;
};

const Test = () => {
  return <div>Test page</div>;
};

export default App;
